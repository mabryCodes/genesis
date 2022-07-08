/* eslint-disable valid-jsdoc */
// eslint-disable-next-line unicorn/prefer-node-protocol
import * as fs from 'fs'
import path = require('path');
import {
  kebabCaseToTitleCase,
  kebabCaseToTitleSpaceCase,
} from '../../utility'
import {propertiesTemplate, templateRenderTemplate} from './args-type-template'

const config = {
  // customElementPath: 'src/custom-element.json',
  customElementPath: 'test/mock-app/src/custom-element.json',
  // defaultNamespace: 'outline',
}

const storybookTemplate = (
  componentName: string,
  componentData: { attributes: any; slots: any; cssVars: any },
  category: string,
) => {
  return `import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { html, TemplateResult } from 'lit';
import './${componentName}';

const configuration = {
  title: \`${category}/${kebabCaseToTitleSpaceCase(componentName)}\`,
  component: '${componentName}', ${propertiesTemplate(componentData.attributes)}
  parameters: {
      source: {
        code: \`
<${componentName}>
  // Add your rendered code here for documentation purposes.
</${componentName}>
        \`,
      },
    },
  };

export default configuration;

${templateRenderTemplate(componentData.attributes, componentName)}

export const ${kebabCaseToTitleCase(componentName)} = Template.bind({});
`
}

/**
 * Creates story from custom element json
 *
 * @param {string} component - name of component
 * @param {string} output - story output path, defaults to the same path as the component
 * @param {string} path - path to custom-element.json. Defaults to '../src/custom-elements.json';
 * @param {string} category - category of component defaults to 'Content'
 */
export const createStory = (
  component: string,
  output?: string,
  customElementPath = config.customElementPath,
  category = 'Content',
): void => {
  const currDir = process.cwd()
  const resolvedPath = path.resolve(currDir, customElementPath)

  import(`${resolvedPath}`)
  .then((customElements: any) => {
    const componentData = customElements.tags.find(
      (tag: { name: any }) => tag.name === component,
    )

    const hasAttributes = componentData.attributes
    const hasSlots = componentData.slots
    const hasCssVariables = componentData.cssVariables

    const namespace = component.split('-')[0]
    // @todo make this dynamic and leverage the config
    const nameSpaceFolder = namespace === 'outline' ? 'base' : namespace
    const componentPath =
        output ? path.resolve(currDir, output)          :
          path.resolve(currDir, `src/components/${nameSpaceFolder}/${component}/generated-${component}.stories.ts`)

    console.log('Creating story for', componentPath, path)

    fs.writeFile(
      componentPath,
      storybookTemplate(
        component,
        {
          attributes: hasAttributes,
          slots: hasSlots,
          cssVars: hasCssVariables,
        },
        category,
      ),
      error => {
        if (error) {
          console.error(error)
        } else {
          console.log(`${component} story created`)
        }
      },
    )
  })
  .catch(error => {
    console.error(error)
  })
}
