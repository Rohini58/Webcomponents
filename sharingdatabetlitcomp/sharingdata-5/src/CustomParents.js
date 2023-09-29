import { LitElement, html, css } from 'lit';
import './customchild.js';

export class ComponentA extends LitElement {
  handleDataShared(event) {
    console.log(event.detail);
  }

  render() {
    return html`
      <custom-child @data-shared="${this.handleDataShared}"></custom-child>
    `;
  }
}
