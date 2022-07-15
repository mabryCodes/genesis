// ============================================================
// <!-- Auto generated file. DO NOT EDIT. -->
// ============================================================
import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {userConfig} from '../user-config';
import '../../test-component';

const argTypes = {

    
    
  
}

const args = {
 
  
  
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
      <test-component
      // <!-- ATTRIBUTES --->
      >
      ${unsafeHTML(args.story)}
    </test-component>
    `;
}
