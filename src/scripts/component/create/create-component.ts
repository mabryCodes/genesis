// import * as fs from 'fs'
// import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
import { outputFileSync } from 'fs-extra';
import path = require('path');
import simpleTemplate = require('../../../templates/component/simple-template');
import { kebabCase } from 'lodash';

import { replaceComponentName } from '../../../utility/utility';
import { analyzeComponent, replaceBaseClassName, replaceBaseClassPath } from '../helpers';
import { createStory, createStoryFromJson } from '../../story/create/create-story';

const config = {
  customElementPath: 'test/src/custom-element.json',
  baseClass: 'OutlineElement',
  directory: 'base',
};

/**
 * Creates component using templates
 * @param {string} args - cli arguments
 * @param {string} flags - cli flags same path as the component
 */
export const createComponent = (args: any, flags: any): void => {
  const componentName = flags.test ? `${args.name}-test` : args.name;
  const directory = flags.directory || config.directory;
  const customElementPath =
    flags.customElementsPath || config.customElementPath;
  const baseClass = flags.baseClass || config.baseClass;
  const currDir = process.cwd();
  const resolvedPath = path.resolve(currDir, customElementPath);
  const componentOutputPath = `${flags.output}${directory}/${componentName}/${componentName}.ts`;
  const cssOutput = `${flags.output}${directory}/${componentName}/${componentName}.css`;

  if (baseClass === 'LitElement') {
    outputFileSync(cssOutput, '');
    outputFileSync(componentOutputPath, simpleTemplate);
    replaceComponentName(componentName, componentOutputPath);
    replaceBaseClassName(baseClass, componentOutputPath);
    
    // set behind a story flag
    const results = analyzeComponent(componentOutputPath);
    createStoryFromJson(results, componentOutputPath, componentName);
  } else {
    importAndReplace(
      resolvedPath,
      baseClass,
      flags,
      cssOutput,
      componentOutputPath,
      componentName,
      directory
    );
  }
};

const importAndReplace = (
  resolvedPath: string,
  baseClass: string,
  flags: any,
  cssOutput: string,
  componentOutputPath: string,
  componentName: string,
  directory: string
): void => {
  // import custom element json file
  import(`${resolvedPath}`)
    .then((customElements: any) => {
      console.log(`Creating ${componentName} at ${componentOutputPath}`);

      // get custom element json data for base class
      const baseClassConfig = customElements.tags.find(
        (tag: { name: any }) => tag.name === kebabCase(baseClass)
      );

      if (!baseClassConfig) {
        throw new Error(
          `Could not find base class ${baseClass} in custom elements json file`
        );
      }

      const baseClassPath = path.relative(
        path.dirname(componentOutputPath),
        baseClassConfig.path
      );

      outputFileSync(cssOutput, '');
      outputFileSync(componentOutputPath, simpleTemplate.default);

      replaceComponentName(componentName, componentOutputPath);
      replaceBaseClassName(baseClass, componentOutputPath);
      replaceBaseClassPath(baseClassPath, componentOutputPath);

      // set behind a story flag
      const results = analyzeComponent(componentOutputPath);
      createStoryFromJson(results, componentOutputPath, componentName)
    })
    .catch(error => {
      console.error(error);
    });
};
