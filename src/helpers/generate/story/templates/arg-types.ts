import {camelCaseToKebabCase, kebabCaseToLowerCamelCase} from '../../../utility'

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
      control: \`${parseControlType(arg.name, arg.type)}\`,
      name: \`${camelCaseToKebabCase(arg.name)}\`,
      description: \`${arg.description}\`,
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: \`${arg.default || '-'}\` 
        } 
      },
    },`
}

export const propertiesTemplate = (args: any[]): string => {
  if (!args) return ''

  return `
  argTypes: { ${args.map(arg => argsTypeTemplate(arg)).join('')}
  },
  args: {${args.map(arg => argTemplate(arg)).join('')}
  },
  `
}

export const templateRenderTemplate = (attr: any, componentName: string): string => {
  return attr && attr.length > 0 ?
    `const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };
  return html\`
    <${componentName} ${attr.map((a: any) => attrTemplate(a)).join('')}
    >
    </${componentName}>
  \`;
}` :
    `const Template = (): TemplateResult => {
  return html\`
    <${componentName}></${componentName}>
  \`;
}`
}

export const attrTemplate = (attr: any): string => {
  let attribute = camelCaseToKebabCase(attr.name)

  switch (attr.type) {
  case 'boolean':
    attribute = `?${attr.name}`
    break
  default:
    break
  }

  return `
      ${attribute}=\${args.${kebabCaseToLowerCamelCase(attr.name)}}`
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
