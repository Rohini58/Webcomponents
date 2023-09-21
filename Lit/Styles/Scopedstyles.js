import { LitElement, html, css } from "lit";

class ScopedStylesComponent extends LitElement {
  render() {
    return html`
      <style>
        /* Scoped styles for this component */
        .scoped-class {
          color: blue;
          font-size: 16px;
        }
      </style>

      <div class="scoped-class">
        <!-- Content with scoped styles -->
        This text has scoped styles applied.
      </div>
    `;
  }
}

customElements.define("scoped-styles-component", ScopedStylesComponent);
