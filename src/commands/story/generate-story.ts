/* eslint-disable valid-jsdoc */
import * as fs from 'node:fs'

/**
 * Converts from kebab-case to capital letter with spaces
 * example 'outline-button' => 'Outline Button'
 * @param {string} str
 * @returns {string} str
 */
export const kebabCaseToTitleSpaceCase = (str: string):string => {
  const arr = str.split('-')
  return arr.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
}

/**
 * Converts from kebab-case to capital letter with no spaces
 * example 'outline-button' => 'OutlineButton'
 * @param {string} str
 */
export const kebabCaseToTitleCase = (str: string): string => {
  const arr = str.split('-')
  return arr.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('')
}

/**
 * Converts string from kebab-case to lower camel case
 * example 'outline-button' => 'outlineButton'
 */
export const kebabCaseToLowerCamelCase = (str: string): string => {
  const arr = str.split('-')
  const formattedArr = arr.map((el, i) => {
    if (i === 0) {
      return el
    }

    return el.charAt(0).toUpperCase() + el.slice(1)
  })
  return formattedArr.join('')
}

const argsRender = (arg: { name: string; default: any; }) => {
  return `
    ${kebabCaseToLowerCamelCase(arg.name)}: ${arg.default || 'undefined'},`
}

const argsTypeRender = (arg: { name: string; type: any; description: any; default: any; }) => {
  return `
    ${kebabCaseToLowerCamelCase(arg.name)}: {
      control: \`${parseControlType(arg.name, arg.type)}\`,
      name: \`${arg.name}\`,
      description: \`${arg.description}\`,
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: \`${arg.default || '-'}\` 
        } 
      },
    },`
}

const argsTemplate = (args: any[]) => {
  if (!args) return ''

  return `
  argTypes: { ${args.map(arg => argsTypeRender(arg)).join('')}
  },
  args: {${args.map(arg => argsRender(arg)).join('')}
  },
  `
}

const templateRenderTemplate = (attr: any, componentName: string) => {
  return attr && attr > 0 ? `const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };
  return html\`
    <${componentName} ${attr.map((a: any) => attrRender(a)).join('')}
    >
    </${componentName}>
  \`;
}` : `const Template = (): TemplateResult => {
  return html\`
    <${componentName}></${componentName}>
  \`;
}`
}

const attrRender = (attr: { name: string; }) => {
  return `
      ${attr.name}=\${args.${kebabCaseToLowerCamelCase(attr.name)}}`
}

/**
 * @todo add support for additional/custom control types (e.g. color, number, etc.)
 * @param {*} name
 * @param {*} controlType
 * @returns void
 */
const parseControlType = (name: any, controlType: any) => {
  switch (controlType) {
  case 'string':
    return 'string'
  case 'number':
    return 'number'
  case 'boolean':
    return 'boolean'
  default:
    console.log(
      `${name} with type of ${controlType} is an unknown control type. If using a custom type you must add it to story manually.`,
    )
    return 'string'
  }
}

const storybookTemplate = (componentName: string, componentData: { attributes: any, slots: any, cssVars: any }, category: string) => {
  return `import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { html, TemplateResult } from 'lit';
import './${componentName}';

const configuration = {
  title: \`${category}/${kebabCaseToTitleSpaceCase(componentName)}\`,
  component: '${componentName}', ${argsTemplate(componentData.attributes)}
  parameters: {
      source: {
        code: \`
<${componentName}>
  // Add your rendered code here for documentation purposes.
</${componentName}>
        \`,
      },
    },
  };

export default configuration;

${templateRenderTemplate(componentData.attributes, componentName)}

export const ${kebabCaseToTitleCase(componentName)} = Template.bind({});
`
}

/**
 * Creates story from custom element json
 *
 * @param {string} component - name of component
 * @param {string} output - story output path, defaults to the same path as the component
 * @param {string} path - path to custom-element.json. Defaults to '../src/custom-elements.json';
 * @param {string} category - category of component defaults to 'Content'
 */
export const createStory = (component: string, output?: string, path = '../../../test/mock-app/src/custom-elements.json', category = 'Content'): void => {
  console.log('Creating story for', component)

  import(`${path}`).then((customElements: any) => {
    const componentData = customElements.tags.find((tag: { name: any; }) => tag.name === component)

    const hasAttributes = componentData.attributes
    const hasSlots = componentData.slots
    const hasCssVariables = componentData.cssVariables

    const namespace = component.split('-')[0]
    const nameSpaceFolder = namespace === 'outline' ? 'base' : namespace
    const componentPath = output || `./src/components/${nameSpaceFolder}/${component}/generated-${component}.stories.ts`
    fs.writeFile(
      componentPath,
      storybookTemplate(
        component,
        {attributes: hasAttributes, slots: hasSlots, cssVars: hasCssVariables},
        category,
      ),
      err => {
        if (err) {
          console.error(err)
        } else {
          console.log(`${component} story created`)
        }
      },
    )
  }).catch(error => {
    console.error(error)
  })
}
