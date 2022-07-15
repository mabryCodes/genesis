// ============================================================
// <!-- Auto generated file. DO NOT EDIT. -->
// ============================================================
import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
// import {userConfig} from './user-config';
import '../outline-alert';

const argTypes = {
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
  },
  size: {
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
  },
  isInteractive: {
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
  },
  shouldShowIcon: {
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

// userConfig.argTypes = {
//   ...argTypes,
//   ...userConfig.argTypes,
// }

// const config = userConfig


const Template = (
  args = config.args, 
): TemplateResult => {
  args = {
    ...config.args,
    ...args,
  };
  
  return html`
      <outline-alert
      ?is-interactive=${args.isInteractive}
      ?should-show-icon=${args.shouldShowIcon}
      >
      ${unsafeHTML(args.story)}
    </outline-alert>
    `;
}


export const OutlineAlert = Template.bind({});

//** TODO: Create story:variant command to build these files */
export const OutlineAlertVariant = Template.bind({});
// @TODO: Figure out why this .args is throwing a type error
// eslint-disable-next-line
// @ts-ignore
OutlineAlertVariant.args = {
  statusType: 'success',
  story: '<p>This is a success alert.</p>',
}

export default config
