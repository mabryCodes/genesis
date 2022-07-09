import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js'
import componentStyles from './outline-doodad.css.lit';

/**
 * The OutlineDoodad component
 * @element outline-doodad
 */
@customElement('outline-doodad')
export class OutlineDoodad extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles]

  /**
  * Document property here
  */
  @property({ type: String, attribute: 'property-var' })
  propertyVar: string;

  render(): TemplateResult {
    return html``;
  }
}
