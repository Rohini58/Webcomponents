import { LitElement, css, html } from "lit";

class MyComponent extends LitElement {
  render() {
    return html`
      <div class="external-element">This text is styled using Lit CSS.</div>
    `;
  }
}
customElements.define("external-stylesheet", MyComponent);
