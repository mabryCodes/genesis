// eslint-disable-next-line unicorn/prefer-module
const replace = require('replace')
import {
  argsTemplate,
  argsTypeTemplate,
  attributesTemplate,
  docsAttributeTemplate,
  slotContentTemplate,
} from '../../templates/story/partials'
import {kebabCaseToLowerCamelCase, kebabCaseToTitleCase, kebabCaseToTitleSpaceCase} from '../../utility/utility'

/**
 * Conditionally adds imports to the story file
 * @param data - custom element json component data
 * @param storyPath - path to story file
 * @returns void
 */
export const replaceImports = (data: any, storyPath: any): void => {
  const marker = '// IMPORTS'
  // const content = getContentBetween(marker, marker, template)
  const imports: string[] = []

  if (data.slots) imports.push("import { unsafeHTML } from 'lit/directives/unsafe-html.js'")

  if (imports.length > 0) {
    replace({
      regex: marker,
      replacement: imports.join('\n'),
      paths: [storyPath],
      recursive: false,
      silent: true,
    })
  }
}

/**
 * Replaces all instances of the component name in the story template
 * @param componentName - component name
 * @param storyPath - path to story file
 * @returns void
 **/
export const replaceComponentName = (componentName: string, storyPath: string): void => {
  const nameTitleCase = kebabCaseToTitleCase(componentName)
  const nameTitleSpaceCase = kebabCaseToTitleSpaceCase(componentName)
  const nameCamelCase = kebabCaseToLowerCamelCase(componentName)

  // @todo: use a loop to replace all instances of the component name?
  replace({
    regex: 'ComponentName',
    replacement: nameTitleCase,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })

  replace({
    regex: 'componentName',
    replacement: nameCamelCase,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })

  replace({
    regex: 'Component Name',
    replacement: nameTitleSpaceCase,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })

  replace({
    regex: 'component-name',
    replacement: componentName,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

export const replaceCategory = (category: string, storyPath: string) => {
  replace({
    regex: 'Category',
    replacement: category,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

export const replaceArgs = (data: any, storyPath: string) => {
  const marker = '// ARGS'
  const args = argsTemplate(data.attributes, data.slots)
  replace({
    regex: marker,
    replacement: args,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

/**
 * Adds the `argsType` properties to the story config
 * @param data - custom element json component data
 * @param storyPath - path to story file
 * @returns void
 */
export const replaceArgTypes = (data: any, storyPath: string):void => {
  const marker = '// ARGTYPES'
  console.log(data)
  const argtypes = argsTypeTemplate(data.attributes, data.slots, data.cssProperties)
  // const content = getContentBetween(marker, marker, template)

  replace({
    regex: marker,
    replacement: argtypes,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

/**
 * Adds additional parameters to the parameters property of the story config
 * @param params - additional parameters to pass to the story
 * @param storyPath - path to story file
 * @returns void
 */
export const replaceParameters = (params: any, storyPath: any): void => {
  const marker = '// PARAMETERS'
  const parameters: string[] = []

  if (params.fullBleed) parameters.push("\t\t\tlayout: 'centered'")

  if (parameters.length > 0) {
    replace({
      regex: marker,
      replacement: parameters.join(''),
      paths: [storyPath],
      recursive: false,
      silent: true,
    })
  }
}

export const replaceAttributes = (data: any, storyPath: string) => {
  const marker = '// ATTRIBUTES'
  const attributes = attributesTemplate(data.attributes)

  replace({
    regex: marker,
    replacement: attributes,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

export const replaceDocAttributes = (data: any, storyPath: string) => {
  const marker = '// DOCATTRIBUTES'
  const attributes = docsAttributeTemplate(data.attributes)

  replace({
    regex: marker,
    replacement: attributes,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

export const replaceSlotContent = (data: any, storyPath: string) => {
  const marker = '// SLOTCONTENT'
  const attributes = slotContentTemplate(data.slots)

  replace({
    regex: marker,
    replacement: attributes,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}
