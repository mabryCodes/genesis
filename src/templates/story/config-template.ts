export default `
// ============================================================
// <!-- Auto generated file. DO NOT EDIT. -->
// ============================================================
import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {userConfig} from '../user-config';
import '../../component-name';

const argTypes = {
  <!-- ARGTYPES --->
}

userConfig.argTypes = {
  ...argTypes,
  ...userConfig.argTypes,
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
  
  return html\`
      <component-name
        <!-- ATTRIBUTES --->
      >
      \${unsafeHTML(args.story)}
    </component-name>
    \`;
}
`