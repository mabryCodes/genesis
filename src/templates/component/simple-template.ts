export default `
import { CSSResultGroup, TemplateResult, html } from 'lit';
import { BaseClass } from '<!-- BASECLASS PATH --->';
import { customElement, property } from 'lit/decorators.js'
import componentStyles from './component-name.css.lit';

/**
 * The ComponentName component
 * @element component-name
 * @slot - default slot
 * @slot header - header slot
 * @cssprop --component-name-color - css prop documentation example
 */
@customElement('component-name')
export class ComponentName extends BaseClass {
  static styles: CSSResultGroup = [componentStyles]

  /**
  * Document property here
  */
  @property({ type: String, attribute: 'property-var' })
  propertyVar: string;

  render(): TemplateResult {
    return html\`
      <slot name="header"></slot>
      <slot></slot>
    \`;
  }
}
`