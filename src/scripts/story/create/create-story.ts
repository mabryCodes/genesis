// import * as fs from 'fs'
// import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
import {outputFileSync} from 'fs-extra'
import path = require('path')
import storyIndexTemplate = require('../../../templates/story/index-template');
import userConfigTemplate from '../../../templates/story/user-config-template';
import configTemplate from '../../../templates/story/config-template';
import variantTemplate from '../../../templates/story/variant-template';
import { replaceComponentName } from '../../../utility/utility';
import {
  replaceArgTypes,
  replaceArgs,
  replaceAttributes,
  replaceDocAttributes,
  replaceSlotContent,
  replaceParameters,
} from '../helpers'

// import {Program} from 'typescript'
// import { analyzeSourceFile } from "web-component-analyzer";

const config = {
  customElementPath: 'test/src/custom-element.json',
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
  // the namespace of the parent folder of the component src/{namespace}/{componentName}
  const nameSpace = flags.nameSpace || config.defaultNamespace
  const customElementPath = flags.customElementsPath || config.customElementPath
  const fullBleed = flags.fullBleed
  const currDir = process.cwd()
  const resolvedPath = path.resolve(currDir, customElementPath)

  const storyIndexOutput = `${flags.output}/${nameSpace}/${componentName}/story/generated/index.stories.ts`
  const configOutput =   `${flags.output}/${nameSpace}/${componentName}/story/generated/config.ts`  
  const userConfigOutput = `${flags.output}/${nameSpace}/${componentName}/story/user-config.ts`
  const variantOutput = `${flags.output}/${nameSpace}/${componentName}/story/${componentName}.stories.ts`

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

