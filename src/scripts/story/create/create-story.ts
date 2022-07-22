// import * as fs from 'fs'
import {outputFileSync, readFileSync} from 'fs-extra'
import path = require('path')
import storyIndexTemplate = require('../../../templates/story/index-template');
import userConfigTemplate from '../../../templates/story/user-config-template';
import configTemplate from '../../../templates/story/config-template';
import variantTemplate from '../../../templates/story/variant-template';

import {
  replaceComponentName,
  replaceArgTypes,
  replaceArgs,
  replaceAttributes,
  replaceDocAttributes,
  replaceSlotContent,
  replaceParameters,
} from '../helpers'

/**
 * Creates story from custom element json file
 * @param {string} component - name of component
 * @param {string} output - story output path, defaults to the same path as the component
 * @param {string} path - path to custom-element.json. Defaults to '../src/custom-elements.json';
 * @param {string} category - category of component defaults to 'Content'
 */
export const createStory = (args: any, flags: any): void => {
  const currDir = process.cwd()
  const componentName = flags.test ? `${args.name}-test` : args.name
  const configPath = path.resolve(currDir, './.genesis.json')
  const config = JSON.parse(readFileSync(configPath, 'utf8'))
  const directory = flags.defaultDirectory || config.defaultDirectory || componentName.split('-')[0]
  const customElementPath = flags.customElementsPath || config.customElementsPath || 'src/custom-elements.json'
  const fullBleed = flags.fullBleed
  const resolvedPath = path.resolve(currDir, customElementPath)

  const storyIndexOutput = `${flags.output}/${directory}/${componentName}/story/generated/index.stories.ts`
  const configOutput =   `${flags.output}/${directory}/${componentName}/story/generated/config.ts`  
  const userConfigOutput = `${flags.output}/${directory}/${componentName}/story/user-config.ts`
  const variantOutput = `${flags.output}/${directory}/${componentName}/story/${componentName}.stories.ts`

  // import custom element json file
  import(`${resolvedPath}`)
  .then((customElements: any) => {
    console.log('Creating story for', componentName, 'at', flags.output)

    // get custom element json data for component
    const componentData = customElements.tags.find(
      (tag: { name: any }) => tag.name === componentName,
    )

    // create story index file from template
    outputFileSync(storyIndexOutput, storyIndexTemplate.default)
    // create user-config file from template
    outputFileSync(userConfigOutput, userConfigTemplate)
    // create config file from template
    outputFileSync(configOutput, configTemplate)
    // create variant file from template
    outputFileSync(variantOutput, variantTemplate)

    const outputPaths = [
      storyIndexOutput,
      configOutput,
      userConfigOutput,
      variantOutput,
    ]

    outputPaths.forEach((output: string) => {   
      replaceComponentName(componentName, output)
      replaceArgTypes(componentData, output)
      replaceArgs(componentData, output)
      replaceParameters({fullBleed}, output)
      replaceDocAttributes(componentData, output)
      replaceAttributes(componentData, output)
      replaceSlotContent(componentData, output)
    })
  })
  .catch(error => {
    console.error(error)
  })
}

