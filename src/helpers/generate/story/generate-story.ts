/* eslint-disable valid-jsdoc */
// eslint-disable-next-line unicorn/prefer-node-protocol
import * as fs from 'fs'
import path = require('path');
import {storybookTemplate} from './templates'

const config = {
  // customElementPath: 'src/custom-element.json',
  customElementPath: 'test/mock-app/src/custom-element.json',
  // defaultNamespace: 'outline',
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

    console.log('Creating story for', componentPath)

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