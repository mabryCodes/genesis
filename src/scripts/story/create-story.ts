/* eslint-disable valid-jsdoc */
// eslint-disable-next-line unicorn/prefer-node-protocol
// import * as fs from 'fs'
// import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
import {outputFileSync} from 'fs-extra'
import path = require('path')
// eslint-disable-next-line unicorn/prefer-module
const replace = require('replace')
import {kebabCaseToLowerCamelCase, kebabCaseToTitleCase, kebabCaseToTitleSpaceCase} from '../../utility/utility';
import storyTemplate = require('./templates/story-template');
import {argsTypeTemplate, argsTemplate, attributesTemplate, slotContentTemplate} from './templates/partials'

const config = {
  customElementPath: 'test/mock-app/src/custom-element.json',
  baseClass: 'OutlineElement',
  defaultNamespace: 'base',
}

/**
 * Creates story from custom element json file
 * @param {string} component - name of component
 * @param {string} output - story output path, defaults to the same path as the component
 * @param {string} path - path to custom-element.json. Defaults to '../src/custom-elements.json';
 * @param {string} category - category of component defaults to 'Content'
 */
export const createStory = (args: any, flags: any): void => {
  const componentName = flags.test ? `${args.name}-test` : args.name
  const nameSpace = flags.nameSpace || config.defaultNamespace
  const category = flags.category || 'Content'
  const customElementPath = flags.customElementPath || config.customElementPath
  const fullBleed = flags.fullBleed
  const currDir = process.cwd()
  const resolvedPath = path.resolve(currDir, customElementPath)
  const output = flags.output || `src/components/${nameSpace}/${componentName}/generated-${componentName}.stories.ts`

  // import custom element json file
  import(`${resolvedPath}`)
  .then((customElements: any) => {
    console.log('Creating story for', componentName, 'at', output)

    // get custom element json data for component
    const componentData = customElements.tags.find(
      (tag: { name: any }) => tag.name === componentName,
    )

    // create story file from template
    outputFileSync(output, storyTemplate.default)

    replaceImports(componentData, output)
    replaceComponentName(componentName, output)
    replaceCategory(category, output)
    replaceArgTypes(componentData, output)
    replaceArgs(componentData, output)
    replaceParameters({fullBleed}, output)
    replaceAttributes(componentData, output)
    replaceSlotContent(componentData, output)
  })
  .catch(error => {
    console.error(error)
  })
}

/**
 * Conditionally adds imports to the story file
 * @param data - custom element json component data
 * @param storyPath - path to story file
 */
const replaceImports = (data: any, storyPath: any) => {
  const marker = '// IMPORTS'
  // const content = getContentBetween(marker, marker, template)
  const imports: string[] = []

  if (data.slots) imports.push("import { unsafeHTML } from 'lit/directives/unsafe-html.js'")

  replace({
    regex: marker,
    replacement: imports.join('\n'),
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

/**
 * Replaces all instances of the component name in the story template
 * @param componentName - component name
 * @param storyPath - path to story file
 **/
const replaceComponentName = (componentName: string, storyPath: string) => {
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

const replaceCategory = (category: string, storyPath: string) => {
  replace({
    regex: 'Category',
    replacement: category,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

const replaceArgs = (data: any, storyPath: string) => {
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
 * @param category - story category that the component belongs to. defaults to 'Content'.
 * @param storyPath - path to story file
 */
const replaceArgTypes = (data: any, storyPath: string) => {
  const marker = '// ARGTYPES'
  const argtypes = argsTypeTemplate(data.attributes, data.slots, data.cssVars)
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
 */
const replaceParameters = (params: any, storyPath: any) => {
  const marker = '// PARAMETERS'
  const parameters: string[] = []

  if (params.fullBleed) parameters.push("\t\t\tlayout: 'centered'")

  replace({
    regex: marker,
    replacement: parameters.join(''),
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

const replaceAttributes = (data: any, storyPath: string) => {
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

const replaceSlotContent = (data: any, storyPath: string) => {
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
