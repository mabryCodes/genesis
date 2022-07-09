import {propertiesTemplate, templateRenderTemplate} from './arg-types'
import {kebabCaseToTitleSpaceCase, kebabCaseToTitleCase} from '../../../utility'

export const storybookTemplate = (
  componentName: string,
  componentData: { attributes: any; slots: any; cssVars: any },
  category: string,
  fullBleed: boolean,
): string => {
  return `import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { html, TemplateResult } from 'lit';
import './${componentName}';

const configuration = {
  title: \`${category}/${kebabCaseToTitleSpaceCase(componentName)}\`,
  component: '${componentName}', ${propertiesTemplate(componentData.attributes, componentData.slots, componentData.cssVars)}parameters: {
    docs: {
      source: {
        code: \`
<${componentName}>
  // Add the rendered code here for documentation purposes. Useful for more complex components.
</${componentName}>
        \`,
      }
    }, 
    ${fullBleed ? 'layout: "fullscreen",' : ''}
  },
};

export default configuration;

${templateRenderTemplate(componentData.attributes, componentData.slots, componentName)}

export const ${kebabCaseToTitleCase(componentName)} = Template.bind({});

export const ${kebabCaseToTitleCase(componentName)}Variant = Template.bind({});
${kebabCaseToTitleCase(componentName)}Variant.args = {
  // overwrite args here for variant
  // sampleArg: 'sample value',
}
`
}
