
import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../../outline-element/outline-element.ts';
import { customElement, property } from 'lit/decorators.js'
import componentStyles from './test-component.css.lit';

/**
 * The TestComponent component
 * @element test-component
 * @slot - default slot
 * @slot header - header slot
 * @cssprop --test-component-color - css prop documentation example
 */
@customElement('test-component')
export class TestComponent extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles]

  /**
  * Document property here
  */
  @property({ type: String, attribute: 'property-var' })
  propertyVar: string;

  render(): TemplateResult {
    return html`
      <slot name="header"></slot>
      <slot></slot>
    `;
  }
}
