import {propertiesTemplate, templateRenderTemplate} from './arg-types'
import {kebabCaseToTitleSpaceCase, kebabCaseToTitleCase} from '../../../utility'

export const storybookTemplate = (
  componentName: string,
  componentData: { attributes: any; slots: any; cssVars: any },
  category: string,
): string => {
  return `import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { html, TemplateResult } from 'lit';
import './${componentName}';

const configuration = {
  title: \`${category}/${kebabCaseToTitleSpaceCase(componentName)}\`,
  component: '${componentName}', ${propertiesTemplate(componentData.attributes)}parameters: {
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
