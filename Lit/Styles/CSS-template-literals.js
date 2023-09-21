import { LitElement, css, html } from "lit";

class MyComponent extends LitElement {
  static styles = css`
    .my-element {
      color: blue;
    }
  `;

  render() {
    return html`
      <div class="my-element">This text is styled using Lit CSS.</div>
    `;
  }
}
customElements.define("css-template", MyComponent);
