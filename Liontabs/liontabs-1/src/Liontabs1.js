import { html, css, LitElement } from 'lit';
import '../lion-form.js';
import '../lion-overview.js';
import '@lion/ui/define/lion-tabs.js';

export class Liontabs1 extends LitElement {
  static styles = css``;

  render() {
    return html`
      <h1>LionTabs</h1>
      <lion-tabs>
        <button slot="tab">Form</button>
        <p slot="panel"><lion-form></lion-form></p>
        <button slot="tab">Cards</button>
        <p slot="panel"><lion-overview></lion-overview></p>
      </lion-tabs>
    `;
  }
}
