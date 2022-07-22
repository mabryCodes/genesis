// import * as fs from 'fs'
import  {outputFileSync, readFileSync } from 'fs-extra'
import path = require('path')
import configTemplate from '../../../templates/story/config-template'
import {replaceComponentName} from '../../../utility/utility'
import {
  replaceArgTypes,
  replaceAttributes,
  replaceArgs,
} from '../helpers'

/**
 * Creates story from custom element json file
 * @param {string} args - the cli arguments
 * @param {string} flags - the cli flags
 * @returns void
 */
export const updateStory = (args: any, flags: any): void => {
  const currDir = process.cwd()
  const configPath = path.resolve(currDir, './.genesis.json')
  const config = JSON.parse(readFileSync(configPath, 'utf8'))

  const componentName = flags.test ? `${args.name}-test` : args.name
  // the namespace of the parent folder of the component src/{namespace}/{componentName}
  const directory = flags.defaultDirectory || componentName.split('-')[0]
  const customElementPath = flags.customElementsPath || config.customElementsPath || 'src/custom-elements.json'
  const resolvedPath = path.resolve(currDir, customElementPath)

  const configOutput = `${flags.output || 'src/components'}/${directory}/${componentName}/story/generated/config.ts`  

  // import custom element json file
  import(`${resolvedPath}`)
  .then((customElements: any) => {
    console.log('Updating story for', componentName, resolvedPath)

    // get custom element json data for component
    const componentData = customElements.tags.find(
      (tag: { name: any }) => tag.name === componentName,
    )

    // const result = analyzeSourceFile(`${resolvedPath}/${componentName}.ts`)

    // create config file from template
    outputFileSync(configOutput, configTemplate)

    replaceComponentName(componentName, configOutput)
    replaceArgTypes(componentData, configOutput)
    replaceAttributes(componentData, configOutput)
    replaceArgs(componentData, configOutput)
    // replaceParameters({fullBleed}, configOutput)
    // replaceDocAttributes(componentData, configOutput)
    // replaceSlotContent(componentData, configOutput)
  })
  .catch(error => {
    console.error(error)
  })
}
