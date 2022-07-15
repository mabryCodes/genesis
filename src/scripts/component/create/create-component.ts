// import * as fs from 'fs'
// import { existsSync, outputFileSync, readFileSync } from 'fs-extra'
import { outputFileSync } from 'fs-extra';
import path = require('path');
import simpleTemplate = require('../../../templates/component/simple-template');
import { kebabCase } from 'lodash';

import { replaceComponentName } from '../../../utility/utility';
import { replaceBaseClassName, replaceBaseClassPath } from '../helpers';

const config = {
  customElementPath: 'test/src/custom-element.json',
  baseClass: 'OutlineElement',
  directory: 'base',
};

/**
 * Creates story from custom element json file
 * @param {string} component - name of component
 * @param {string} output - story output path, defaults to the same path as the component
 * @param {string} path - path to custom-element.json. Defaults to '../src/custom-elements.json';
 * @param {string} category - category of component defaults to 'Content'
 */
export const createComponent = (args: any, flags: any): void => {
  const componentName = flags.test ? `${args.name}-test` : args.name;
  const directory = flags.directory || config.directory;
  const customElementPath =
    flags.customElementsPath || config.customElementPath;
  const baseClass = flags.baseClass || config.baseClass;
  const currDir = process.cwd();
  const resolvedPath = path.resolve(currDir, customElementPath);
  const componentOutputPath = `${flags.output}/${directory}/${componentName}/${componentName}.ts`;
  const cssOutput = `${flags.output}/${directory}/${componentName}/${componentName}.css`;

  if (baseClass === 'LitElement') {
    outputFileSync(cssOutput, '');
    outputFileSync(componentOutputPath, simpleTemplate);
    replaceComponentName(componentName, componentOutputPath);
    replaceBaseClassName(baseClass, componentOutputPath);
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
  directory: string,
): void => {
  // import custom element json file
  import(`${resolvedPath}`)
    .then((customElements: any) => {
      console.log('Creating story for', baseClass, 'at', flags.output);

      // using hardcoded value for now
      // get custom element json data for component
      const baseClassConfig = customElements.tags.find(
        (tag: { name: any }) => tag.name === kebabCase(baseClass)
      );
      
      const processComponentPath = `${process.cwd()}/${componentOutputPath}`;
      const processedDirectoryPath = `${process.cwd()}/${directory}`;

      console.log('processComponentPath', processComponentPath)
      console.log('processedDirectoryPath', processedDirectoryPath)
      
      const baseClassPath = path.resolve(
        `${process.cwd()}/${componentOutputPath}`,
        `${process.cwd()}/${directory}`,
        );

        const finalPath = path.resolve(componentOutputPath, baseClassPath)
        const filteredBaseClassPath = baseClassPath.replace('.ts', '');
console.log(finalPath);

      outputFileSync(cssOutput, '');
      outputFileSync(componentOutputPath, simpleTemplate.default);
      replaceAll(componentName, componentOutputPath, baseClass, baseClassPath);
    })
    .catch(error => {
      console.error(error);
    });
};

const replaceAll = (
  componentName: string,
  componentOutput: string,
  baseClass: string,
  path: string
): void => {
  replaceComponentName(componentName, componentOutput);
  replaceBaseClassName(baseClass, componentOutput);
  replaceBaseClassPath(path, componentOutput);
};
