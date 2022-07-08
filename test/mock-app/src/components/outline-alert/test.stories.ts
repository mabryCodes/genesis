import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { html, TemplateResult } from 'lit';
import './outline-alert';

const configuration = {
  title: `Content/Outline Alert`,
  component: 'outline-alert', 
  argTypes: { 
    statusType: {
      control: `string`,
      name: `statusType`,
      description: `undefined`,
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: `"info"` 
        } 
      },
    },
    size: {
      control: `string`,
      name: `size`,
      description: `undefined`,
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: `"large"` 
        } 
      },
    },
    isInteractive: {
      control: `boolean`,
      name: `isInteractive`,
      description: `This is important context for screen readers.`,
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: `false` 
        } 
      },
    },
    shouldShowIcon: {
      control: `boolean`,
      name: `shouldShowIcon`,
      description: `undefined`,
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: `true` 
        } 
      },
    },
  },
  args: {
    statusType: "info",
    size: "large",
    isInteractive: false,
    shouldShowIcon: true,
  },
  
  parameters: {
      source: {
        code: `
<outline-alert>
  // Add your rendered code here for documentation purposes.
</outline-alert>
        `,
      },
    },
  };

export default configuration;

const Template = (): TemplateResult => {
  return html`
    <outline-alert></outline-alert>
  `;
}

export const OutlineAlert = Template.bind({});
