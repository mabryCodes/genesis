import { outputFileSync, readFileSync } from 'fs-extra';
import path = require('path');
import simpleTemplate = require('../../../templates/component/simple-template');
import { kebabCase } from 'lodash';

import { replaceComponentName } from '../../../utility/utility';
import { analyzeComponent, replaceBaseClassName, replaceBaseClassPath } from '../helpers';
import { createStoryFromJson } from '../../story/create/create-story';

/**
 * Creates component using templates
 * @param {string} args - cli arguments
 * @param {string} flags - cli flags same path as the component
 */
export const createComponent = (args: any, flags: any): void => {
  const currDir = process.cwd();
  const componentName = flags.test ? `${args.name}-test` : args.name;
  const configPath = path.resolve(currDir, './.genesis.json')
  const config = JSON.parse(readFileSync(configPath, 'utf8'))
  const directory = flags.defaultDirectory || config.defaultDirectory || componentName.split('-')[0]
  const customElementPath =
    flags.customElementsPath || config.customElementPath || 'src/custom-elements.json';
  const baseClass = flags.baseClass || config.baseClass || 'LitElement';
  const resolvedPath = path.resolve(currDir, customElementPath);
  const componentOutputPath = `${flags.output || 'src/components'}/${directory}/${componentName}/${componentName}.ts`;
  const cssOutput = `${flags.output}/${directory}/${componentName}/${componentName}.css`;

  if (baseClass === 'LitElement') {
    outputFileSync(cssOutput, '');
    outputFileSync(componentOutputPath, simpleTemplate.default);
    replaceComponentName(componentName, componentOutputPath);
    replaceBaseClassName(baseClass, componentOutputPath);
    replaceBaseClassPath('lit', componentOutputPath);
    
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
