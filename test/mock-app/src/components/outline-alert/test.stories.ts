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
    defaultSlot: {
      control: 'text',
      description: `The alert contents.`,
      table: { 
        category: 'Slots', 
      },
    },
    headerSlot: {
      control: 'text',
      description: `The header in the alert.`,
      table: { 
        category: 'Slots', 
      },
    },
  },
  args: {
    statusType: "info",
    size: "large",
    isInteractive: false,
    shouldShowIcon: true,
    defaultSlot: `Enter slot content here`,
    headerSlot: `Enter slot content here`,
  },
  parameters: {
    source: {
      code: `
<outline-alert>
  // Add the rendered code here for documentation purposes. Useful for more complex components.
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
      
      ${unsafeHTML(args.defaultSlot ?? '')}
  
      <div slot="header">${unsafeHTML(args.headerSlot ?? '')}</div>
  
    </outline-alert>
  `;
}

export const OutlineAlert = Template.bind({});

export const OutlineAlertVariant = Template.bind({});
OutlineAlertVariant.args = {
  // overwrite args here for variant
  // sampleArg: 'sample value',
}
