// ============================================================
// <!-- Auto generated file. DO NOT EDIT. -->
// ============================================================
import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {userConfig} from '../user-config';
import '../../outline-alert';

const argTypes = {
priority: {
      control: {
        type: 'select',
        options: ['1','2','3','4']
      },
      name: 'priority',
      description: 'undefined',
      table: { 
        category: 'Properties', 
        defaultValue: { 
          summary: "2"
        } 
      },
    },		statusType: {
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
    },		testAlertProperty: {
      control: {
        type: 'boolean'
      },
      name: 'test-alert-property',
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
    
    outlineAlertInfoBackground: {
      name: '--outline-alert-info-background',
      description: 'The background color for the info alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertInfoText: {
      name: '--outline-alert-info-text',
      description: 'The text color for the info alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertInfoBorder: {
      name: '--outline-alert-info-border',
      description: 'The border color for the info alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertSuccessBackground: {
      name: '--outline-alert-success-background',
      description: 'The background color for the success alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertSuccessText: {
      name: '--outline-alert-success-text',
      description: 'The text color for the success alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertSuccessBorder: {
      name: '--outline-alert-success-border',
      description: 'The border color for the success alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertWarningBackground: {
      name: '--outline-alert-warning-background',
      description: 'The background color for the warning alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertWarningText: {
      name: '--outline-alert-warning-text',
      description: 'The text color for the warning alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertWarningBorder: {
      name: '--outline-alert-warning-border',
      description: 'The border color for the warning alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertErrorBackground: {
      name: '--outline-alert-error-background',
      description: 'The background color for the error alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertErrorText: {
      name: '--outline-alert-error-text',
      description: 'The text color for the error alert.',
      table: { category: 'CSS Variables' }
    },
    outlineAlertErrorBorder: {
      name: '--outline-alert-error-border',
      description: 'The border color for the error alert.',
      table: { category: 'CSS Variables' }
    },
  
}

const args = {

    priority: "2",
    statusType: "info",
    size: "large",
    isInteractive: false,
    testAlertProperty: false,
    shouldShowIcon: true, 
  defaultSlot: `Enter slot content here`,		headerSlot: `Enter slot content here`,		
  
}

userConfig.argTypes = {
  ...argTypes,
  ...userConfig.argTypes,
}

userConfig.args = {
  ...args,
  ...userConfig.args,
}

const config = userConfig;

export default config;

export const Template = (
  args = config.args, 
): TemplateResult => {
  args = {
    ...config.args,
    ...args,
  };
  
  return html`
      <outline-alert
      priority=${args.priority}			status-type=${args.statusType}			size=${args.size}			?isInteractive=${args.isInteractive}			?testAlertProperty=${args.testAlertProperty}			?shouldShowIcon=${args.shouldShowIcon}			
      >
      ${unsafeHTML(args.story)}
    </outline-alert>
    `;
}
