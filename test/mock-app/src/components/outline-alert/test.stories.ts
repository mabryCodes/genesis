import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import './outline-alert';

const configuration = {
  title: "Content/Outline Alert",
  component: 'outline-alert',
  argTypes: {
    statusType: {
      control: {
        type: 'select',
        options: ['info','warning','error','success']
      },
      name: 'status-type',
      description: 'undefined',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: "info"
        } 
      },
    },		size: {
      control: {
        type: 'select',
        options: ['small','large']
      },
      name: 'size',
      description: 'undefined',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: "large"
        } 
      },
    },		isInteractive: {
      control: {
        type: 'boolean'
      },
      name: 'is-interactive',
      description: 'This is important context for screen readers.',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: false
        } 
      },
    },		shouldShowIcon: {
      control: {
        type: 'boolean'
      },
      name: 'should-show-icon',
      description: 'undefined',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: true
        } 
      },
    },		
    
    defaultSlot: {
      control: 'text',
      description: 'The alert contents.',
      table: { category: 'Slots' },
    },
    headerSlot: {
      control: 'text',
      description: 'The header in the alert.',
      table: { category: 'Slots' },
    },
    
  
  },
  args: {
    
    statusType: "info",
    size: "large",
    isInteractive: false,
    shouldShowIcon: true, 
  defaultSlot: `Enter slot content here`,		headerSlot: `Enter slot content here`,		
  
  },
  parameters: {
    
    docs: {
      source: {
        code: `
<outline-alert
  /// -ATTRIBUTES - need to fix or add docs attribute specific replace function
>
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
      status-type=${args.statusType}			size=${args.size}			?isInteractive=${args.isInteractive}			?shouldShowIcon=${args.shouldShowIcon}			
      >
      	${unsafeHTML(args.defaultSlot ?? '')}			<div slot="header">${unsafeHTML(args.headerSlot ?? '')}</div>
      </outline-alert>
   `;
}

export const OutlineAlert = Template.bind({});

export const OutlineAlertVariant = Template.bind({});
OutlineAlertVariant.args = {
  // overwrite args here for variant
  // sampleArg: 'sample value',
}
OutlineAlertVariant.parameters = {
  docs: {
    source: {
      code: `
<outline-alert>
// the code in the main config is used for all stories unless overwritten here
</outline-alert>
      `,
    }
  },   
}
