export default `import { html, TemplateResult } from 'lit';
// IMPORTS
import './component-name';

const configuration = {
  title: "Category/Component Name",
  component: 'component-name',
  argTypes: {
    // ARGTYPES
  },
  args: {
    // ARGS
  },
  parameters: {
    // PARAMETERS
    docs: {
      source: {
        code: \`
<component-name
  // DOCATTRIBUTES
>
</component-name>
        \`,
      }
    },   
  },
};

export default configuration;

const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };
  
  return html\`
      <component-name
      // ATTRIBUTES
      >
      // SLOTCONTENT
      </component-name>
   \`;
}

export const ComponentName = Template.bind({});

export const ComponentNameVariant = Template.bind({});
ComponentNameVariant.args = {
  // overwrite args here for variant
  // sampleArg: 'sample value',
}
ComponentNameVariant.parameters = {
  docs: {
    source: {
      code: \`
<component-name>
// the code in the main config is used for all stories unless overwritten here
</component-name>
      \`,
    }
  },   
}
`
