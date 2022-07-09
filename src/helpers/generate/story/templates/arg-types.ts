import {camelCaseToKebabCase, cssVarCaseToLowerCamelCase, kebabCaseToLowerCamelCase} from '../../../utility'

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
  if (!args && !slots) return ''
  return `
  argTypes: { ${args.map(arg => argsTypeTemplate(arg)).join('')} ${slots && slots.map(arg => slotArgsTypeTemplate(arg)).join('')} ${cssVars && cssVars.map(arg => cssVarArgsTypeTemplate(arg)).join('')}
  },
  args: {${args.map(arg => argTemplate(arg)).join('')} ${slots && slots.map(arg => slotArgTemplate(arg)).join('')}
  },
  `
}

export const templateRenderTemplate = (attrs: any[], slots: any[], componentName: string): string => {
  return attrs && attrs.length > 0 ?
    `const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };
  return html\`
    <${componentName} ${attrs.map((a: any) => attrTemplate(a)).join('')}
    >
      ${slots.map((s: any) => slotRenderTemplate(s)).join('')}
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
    attribute = `?${attribute}`
    break
  default:
    break
  }

  return `
      ${attribute}=\${args.${kebabCaseToLowerCamelCase(attr.name)}}`
}

export const slotRenderTemplate = (slot: any): string => {
  return slot.name === 'default'    ?
    `
      \${unsafeHTML(args.${kebabCaseToLowerCamelCase(slot.name)}Slot ?? '')}
  `  :
    `
      <div slot="${slot.name}">\${unsafeHTML(args.${kebabCaseToLowerCamelCase(slot.name)}Slot ?? '')}</div>
  `
}

const slotArgTemplate = (arg: any) => `
    ${kebabCaseToLowerCamelCase(arg.name)}Slot: \`Enter slot content here\`,`

const slotArgsTypeTemplate = (arg: any) => {
  return `
  ${kebabCaseToLowerCamelCase(arg.name)}Slot: {
    control: 'text',
    description: \`${arg.description}\`,
    table: { 
      category: 'Slots', 
    },
  },`
}

// @todo add ability to collapse the css vars table by default if possible
const cssVarArgsTypeTemplate = (arg: any) => {
  return `
  ${cssVarCaseToLowerCamelCase(arg.name)}: {
    name: '${arg.name}',
    description: \`${arg.description}\`,
    table: {
      category: 'CSS Variables',
    }
  },`
}
