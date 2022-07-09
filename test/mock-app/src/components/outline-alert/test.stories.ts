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
    outlineAlertInfoBackground: {
      name: '--outline-alert-info-background',
      description: `The background color for the info alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertInfoText: {
      name: '--outline-alert-info-text',
      description: `The text color for the info alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertInfoBorder: {
      name: '--outline-alert-info-border',
      description: `The border color for the info alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertSuccessBackground: {
      name: '--outline-alert-success-background',
      description: `The background color for the success alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertSuccessText: {
      name: '--outline-alert-success-text',
      description: `The text color for the success alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertSuccessBorder: {
      name: '--outline-alert-success-border',
      description: `The border color for the success alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertWarningBackground: {
      name: '--outline-alert-warning-background',
      description: `The background color for the warning alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertWarningText: {
      name: '--outline-alert-warning-text',
      description: `The text color for the warning alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertWarningBorder: {
      name: '--outline-alert-warning-border',
      description: `The border color for the warning alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertErrorBackground: {
      name: '--outline-alert-error-background',
      description: `The background color for the error alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertErrorText: {
      name: '--outline-alert-error-text',
      description: `The text color for the error alert.`,
      table: {
        category: 'CSS Variables',
      }
    },
    outlineAlertErrorBorder: {
      name: '--outline-alert-error-border',
      description: `The border color for the error alert.`,
      table: {
        category: 'CSS Variables',
      }
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
    docs: {
      source: {
        code: `
<outline-alert>
  // Add the rendered code here for documentation purposes. Useful for more complex components.
</outline-alert>
        `,
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
