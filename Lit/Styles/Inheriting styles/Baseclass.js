import { LitElement, css, html } from "lit";

class BaseComponent extends LitElement {
  static styles = css`
    /* Base component styles */
    .base-class {
      color: blue;
    }
  `;
}
customElements.define("base-class", BaseComponent);
