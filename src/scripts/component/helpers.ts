import { analyzeSourceFile, analyzeText, AnalyzeTextResult, transformAnalyzerResult } from "web-component-analyzer"
import { kebabCaseToTitleCase, kebabCaseToTitleSpaceCase, kebabCaseToLowerCamelCase } from "../../utility/utility"
const fs = require("fs")

const replace = require('replace')

// @TODO: create a function to dynamically insert regex for versatility
/**
 * Replaces all instances of the component name in the story template
 * @param componentName - component name
 * @param storyPath - path to story file
 * @returns void
 **/
 export const replaceBaseClassName = (componentName: string, storyPath: string): void => {
  const nameTitleCase = kebabCaseToTitleCase(componentName)
  const nameTitleSpaceCase = kebabCaseToTitleSpaceCase(componentName)
  const nameCamelCase = kebabCaseToLowerCamelCase(componentName)

  // @todo: use a loop to replace all instances of the component name?
  replace({
    regex: 'BaseClass',
    replacement: nameTitleCase,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })

  replace({
    regex: 'baseClass',
    replacement: nameCamelCase,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })

  replace({
    regex: 'Base Class',
    replacement: nameTitleSpaceCase,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })

  replace({
    regex: 'base-class',
    replacement: componentName,
    paths: [storyPath],
    recursive: false,
    silent: true,
  })
}

/**
 * Replaces all instances of the component name in the story template
 * @param componentName - component name
 * @param storyPath - path to story file
 * @returns void
 **/
 export const replaceBaseClassPath = (path: string, componentPath: string): void => {

  // @todo: use a loop to replace all instances of the component name?
  replace({
    regex: '<!-- BASECLASS PATH --->',
    replacement: path,
    paths: [componentPath],
    recursive: false,
    silent: true,
  })
}

export const analyzeComponent = (componentPath: string): string => {
  let fileStr = fs.readFileSync(componentPath, "utf8").toString();
  let result: AnalyzeTextResult = analyzeText(fileStr);
  let output = transformAnalyzerResult("json", result.results, result.program, {visibility: "private"});
  return output
}
