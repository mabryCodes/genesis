import {camelCaseToKebabCase, kebabCaseToLowerCamelCase, cssVarCaseToLowerCamelCase} from '../../utility/utility'

export const attributesTemplate = (attrs: any[]): string => {
  return attrs.map((a: any) => attrTemplate(a)).join('')
}

export const docsAttributeTemplate = (attrs: any[]): string => {
  return attrs.map((a: any) => docsAttrTemplate(a)).join('')
}

const docsAttrTemplate = (attr: any): string => {
  const attribute = camelCaseToKebabCase(attr.name)

  return `
  ${attribute}=${attr.default}`
}

const attrTemplate = (attr: any): string => {
  let attribute = camelCaseToKebabCase(attr.name)

  // sets any data-binding specific syntax
  switch (attr.type) {
  case 'boolean':
    attribute = `?${attr.name}`
    break
  default:
    break
  }

  return `${attribute}=\${args.${kebabCaseToLowerCamelCase(attr.name)}}\r\t\t\t`
}

const slotRenderTemplate = (slot: any): string => {
  return slot.name === 'default' ?
    `\t<p>Default Slot Content</p>\r`  :
    `\t\t\t<p slot="${slot.name}">${slot.name} slot content</p>\r`
}

const slotArgTemplate = (arg: any) => {
  return `${kebabCaseToLowerCamelCase(arg.name)}Slot: \`Enter slot content here\`,\r\t\t`
}

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

const argTypeTemplatePartial = (arg: {
  name: string;
  type: any;
  description: any;
  default: any;
}): string => {
  return `${kebabCaseToLowerCamelCase(arg.name)}: {
      ${controlTemplate(arg)}
      name: '${camelCaseToKebabCase(arg.name)}',
      description: '${arg.description}',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: ${arg.default || '-'}
        } 
      },
    },\r\t\t`
}

export const argsTypeTemplate = (args: any[], slots: any[], cssVars: any[]): string => {
  return `${args ? args.map(arg => argTypeTemplatePartial(arg)).join('') : ''}
    ${slots ? slots.map(arg => slotArgsTypeTemplate(arg)).join('') : ''}
    ${cssVars ? cssVars.map(arg => cssVarArgsTypeTemplate(arg)).join('') : ''}
  `
}

export const argsTemplate = (args: any[], slots: any[]): string => {
  return `${args ? args.map(arg => argTemplate(arg)).join('') : ''} 
  ${slots ? slots.map(arg => slotArgTemplate(arg)).join('') : ''}
  `
}

/**
 * @todo add support for additional/custom control types (e.g. color, number, etc.)
 * @param {*} controlType - the type of control to use
 * @returns void
 */
const parseControlType = (controlType: any) => {
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
  const controlType = parseControlType(arg.type)

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

export const slotContentTemplate = (slots: any[]): string => {
  return slots.map((s: any) => slotRenderTemplate(s)).join('')
}
