import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { html, TemplateResult } from 'lit';
import './outline-alert';

const configuration = {
  title: `Content/Outline Alert`,
  component: 'outline-alert', 
  argTypes: { 
    statusType: {
      control: `string`,
      name: `status-type`,
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
      name: `is-interactive`,
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
      name: `should-show-icon`,
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

const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };
  return html`
    <outline-alert 
      status-type=${args.statusType}
      size=${args.size}
      ?isInteractive=${args.isInteractive}
      ?shouldShowIcon=${args.shouldShowIcon}
    >
    </outline-alert>
  `;
}

export const OutlineAlert = Template.bind({});
