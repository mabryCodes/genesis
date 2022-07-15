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

export const replaceArgs = (data: any, storyPath: string) => {
  const marker = '// <!-- ARGS --->'
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
  const marker = '// <!-- ARGTYPES --->'
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
  const marker = '// <!-- PARAMETERS --->'
  const parameters: string[] = []

  if (params.fullBleed) parameters.push("\t\t\tlayout: 'fullscreen'")

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
  const marker = '// <!-- ATTRIBUTES --->'
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
  const marker = '// <!-- DOCS ATTRIBUTES --->'
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
  const marker = '// <!-- SLOT CONTENT --->'
  const attributes = slotContentTemplate(data.slots)

  replace({
    regex: marker,
    replacement: attributes,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}
