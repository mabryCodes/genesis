// import * as fs from 'fs'
// import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
import {outputFileSync} from 'fs-extra'
import path = require('path')
import configTemplate from '../../../templates/story/config-template';
import {replaceComponentName} from '../../../utility/utility';
import {
  replaceArgTypes,
  replaceAttributes,
  replaceArgs
} from '../helpers'

import {Program} from 'typescript'
import { analyzeSourceFile } from "web-component-analyzer";

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
export const updateStory = (args: any, flags: any): void => {
  const componentName = flags.test ? `${args.name}-test` : args.name
  // the namespace of the parent folder of the component src/{namespace}/{componentName}
  const nameSpace = flags.nameSpace || config.defaultNamespace
  const customElementPath = flags.customElementsPath || config.customElementPath
  const currDir = process.cwd()
  const resolvedPath = path.resolve(currDir, customElementPath)

  const configOutput = `${flags.output}/${nameSpace}/${componentName}/story/generated/config.ts`  


  // import custom element json file
  import(`${resolvedPath}`)
  .then((customElements: any) => {
    console.log('Updating story for', componentName)

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
