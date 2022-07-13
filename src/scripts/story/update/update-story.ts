// import * as fs from 'fs'
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
  console.log(config)

  const componentName = flags.test ? `${args.name}-test` : args.name
  const nameSpace = flags.nameSpace || config.defaultNamespace
  // const category = flags.category || 'Content'
  const customElementPath = flags.customElementPath || config.customElementJson
  const storyPath = flags.storyPath || `src/components/${nameSpace}/${componentName}/generated-${componentName}.stories.ts`
  const story = parseStory(currDir, storyPath)
  // const fullBleed = flags.fullBleed
  const resolvedPath = path.resolve(currDir, customElementPath)
  // const output = flags.output || `src/components/${nameSpace}/${componentName}/updated-${componentName}.stories.ts`
  console.log('Updating story for', args.name, 'at', story)
  // @todo - need to update to check if file exists and if not then create it
  // import story file
  import(`${resolvedPath}`)
  .then((customElements: any) => {
    // get custom element json data for component
    // const componentData = customElements.tags.find(
    //   (tag: { name: any }) => tag.name === componentName,
    // )
    console.log(story.default.argTypes.statusType)
    
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
