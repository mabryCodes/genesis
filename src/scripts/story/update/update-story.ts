// eslint-disable-next-line unicorn/prefer-node-protocol
import * as fs from 'fs'
// import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
// import {outputFileSync} from 'fs-extra'
import path = require('path')
// import storyTemplate = require('../../../templates/story/story-template');
// import {
//   replaceImports,
//   replaceComponentName,
//   replaceCategory,
//   replaceArgTypes,
//   replaceArgs,
//   replaceAttributes,
//   replaceSlotContent,
//   replaceParameters,
// } from '../helpers'

export const updateStory = (args: any, flags: any, config: any, currDir: string): void => {
  // console.log(config)

  const componentName = flags.test ? `${args.name}-test` : args.name
  const nameSpace = flags.nameSpace || config.defaultNamespace
  // const category = flags.category || 'Content'
  const customElementPath = flags.customElementPath || config.customElementJson
  const storyPath = flags.storyPath || `src/components/${nameSpace}/${componentName}/${componentName}.stories.ts`
  const storyFile = fs.readFileSync(storyPath, 'utf-8')
  const storyConfig = parseStory(currDir, storyPath).default
  // const fullBleed = flags.fullBleed
  const resolvedPath = path.resolve(currDir, customElementPath)
  // const output = flags.output || `src/components/${nameSpace}/${componentName}/updated-${componentName}.stories.ts`
  // console.log('Updating story for', args.name, 'at', storyPath)

  // @todo - need to update to check if file exists and if not then create it
  // import story file
  import(`${resolvedPath}`)
  .then((customElements: any) => {
    // get custom element json data for component
    const componentData = customElements.tags.find(
      (tag: { name: any }) => tag.name === componentName,
    )
    // console.log(result)
    updateProperties(componentData, storyConfig, storyFile)
    // // create story file from template
    // outputFileSync(output, storyTemplate.default)

    // replaceImports(componentData, output)
    // replaceComponentName(componentName, output)
    // replaceCategory(category, output)
    // replaceArgTypes(componentData, output)
    // replaceArgs(componentData, output)
    // replaceParameters({fullBleed}, output)
    // replaceAttributes(componentData, output)
    // replaceSlotContent(componentData, output)
  })
  .catch(error => {
    console.error(error)
  })
}

const parseStory = (currDir: string, storyPath: string): any => {
  const resolvedPath = path.resolve(currDir, storyPath)
  const story = require(resolvedPath)
  return story
}

const updateProperties = (componentData:any, storyConfig: any, storyFile: string):void => {
  // console.log(componentData)
  // console.log(storyConfig.argTypes)
  console.log(storyFile)
}
