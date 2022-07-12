/* eslint-disable valid-jsdoc */
// eslint-disable-next-line unicorn/prefer-node-protocol
// import * as fs from 'fs'
// import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
import {outputFileSync} from 'fs-extra'
import path = require('path')
import storyTemplate = require('../../templates/story/story-template');
import {
  replaceImports,
  replaceComponentName,
  replaceCategory,
  replaceArgTypes,
  replaceArgs,
  replaceAttributes,
  replaceSlotContent,
  replaceParameters,
} from './helpers'

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

