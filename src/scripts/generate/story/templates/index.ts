import {camelCaseToKebabCase, cssVarCaseToLowerCamelCase, kebabCaseToLowerCamelCase, kebabCaseToTitleCase, kebabCaseToTitleSpaceCase} from '../../../utility'

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
    return 'select'
  }
}

const controlTemplate = (arg: any) => {
  const controlType = parseControlType(arg.name, arg.type)

  if (controlType === 'select') {
    const options = arg.type.split('"').filter((n: string) => n && n.trim() !== '|')
    return `control: {
        type: '${controlType}',
        options: [${options.map((option: string) => `'${option}'`)}]
      },`
  }

  return `control: {
        type: '${controlType}'
      },`
}

export const propertiesTemplate = (args: any[], slots: any[], cssVars: any[]): string => {
  return `
  argTypes: { 
    ${args ? args.map(arg => argsTypeTemplate(arg)).join('') : ''}
    ${slots ? slots.map(arg => slotArgsTypeTemplate(arg)).join('') : ''}
    ${cssVars ? cssVars.map(arg => cssVarArgsTypeTemplate(arg)).join('') : ''}
  },
  args: {${args.map(arg => argTemplate(arg)).join('')} 
    ${slots ? slots.map(arg => slotArgTemplate(arg)).join('') : '\n'}
  },
  `
}

export const renderTemplate = (
  attrs: any[],
  slots: any[],
  componentName: string,
): string => {
  const properties = attrs && attrs.length > 0 ? attrs.map((a: any) => attrTemplate(a)).join('') : ''
  const slotsContent = slots && slots.length > 0 ? slots.map((s: any) => slotRenderTemplate(s)).join('') : ''

  // @todo clean up this return
  return properties ?
    `const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };

  return html\`
    <${componentName}
      ${properties} >
      ${slotsContent}
    </${componentName}>
  \`;
}`  :
    `const Template = (): TemplateResult => {
  return html\`
    <${componentName}>
      ${slotsContent}
    </${componentName}>
  \`;
}`
}

export const attrTemplate = (attr: any): string => {
  let attribute = camelCaseToKebabCase(attr.name)

  // sets any data-binding specific syntax
  switch (attr.type) {
  case 'boolean':
    attribute = `?${attribute}`
    break
  default:
    break
  }

  return `${attribute}=\${args.${kebabCaseToLowerCamelCase(attr.name)}}\r\t\t\t`
}

export const slotRenderTemplate = (slot: any): string => {
  const slotName = kebabCaseToLowerCamelCase(slot.name)
  return slot.name === 'default' ?
    `\${unsafeHTML(args.${slotName}Slot ?? '')}\n`  :
    `\t\t\t<div slot="${slot.name}">\${unsafeHTML(args.${slotName}Slot ?? '')}</div>\n`
}

const slotArgTemplate = (arg: any) =>
  `${kebabCaseToLowerCamelCase(arg.name)}Slot: \`Enter slot content here\`,\r\t\t`

const slotArgsTypeTemplate = (arg: any) => {
  return `
    ${kebabCaseToLowerCamelCase(arg.name)}Slot: {
      control: 'text',
      description: '${arg.description}',
      table: { category: 'Slots' },
    },`
}

// @todo add ability to collapse the css vars table by default if possible
const cssVarArgsTypeTemplate = (arg: any) => {
  return `
    ${cssVarCaseToLowerCamelCase(arg.name)}: {
      name: '${arg.name}',
      description: '${arg.description}',
      table: { category: 'CSS Variables' }
    },`
}

const argTemplate = (arg: { name: string; default: any }): string => {
  return `
    ${kebabCaseToLowerCamelCase(arg.name)}: ${arg.default || 'undefined'},`
}

const argsTypeTemplate = (arg: {
  name: string;
  type: any;
  description: any;
  default: any;
}) => {
  return `
    ${kebabCaseToLowerCamelCase(arg.name)}: {
      ${controlTemplate(arg)}
      name: '${camelCaseToKebabCase(arg.name)}',
      description: '${arg.description}',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: '${arg.default || '-'}' 
        } 
      },
    },`
}

export const storybookTemplate = (
  componentName: string,
  componentData: { attributes: any; slots: any; cssVars: any },
  category: string,
  fullBleed: boolean,
): string => {
  const nameTitleCase = kebabCaseToTitleCase(componentName)
  const nameTitleSpaceCase = kebabCaseToTitleSpaceCase(componentName)
  const propTemp = propertiesTemplate(componentData.attributes, componentData.slots, componentData.cssVars)
  const renderTemp = renderTemplate(componentData.attributes, componentData.slots, componentName)

  return `${importTemplate(componentName, componentData)}

const configuration = {
  title: \`${category}/${nameTitleSpaceCase}\`,
  component: '${componentName}', ${propTemp} 
  parameters: {
    docs: {
      source: {
        code: \`
<${componentName}>
  // Add the rendered code here for documentation purposes. Useful for more complex components.
</${componentName}>
        \`,
      }
    }, 
    ${fullBleed ? 'layout: "fullscreen",' : ''}
  },
};

export default configuration;

${renderTemp}

export const ${nameTitleCase} = Template.bind({});

export const ${nameTitleCase}Variant = Template.bind({});
${nameTitleCase}Variant.args = {
  // overwrite args here for variant
  // sampleArg: 'sample value',
}
`
}

const importTemplate = (
  componentName: string,
  componentData: {
    attributes: any;
    slots: any;
    cssVars: any
  }): string => {
  return `${componentData.slots ? "import { unsafeHTML } from 'lit/directives/unsafe-html.js'" : ''}
import { html, TemplateResult } from 'lit';
import './${componentName}';`
}

