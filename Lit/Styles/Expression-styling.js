import { LitElement, html, css } from "lit";

class MyComponent extends LitElement {
  static styles = css`
    .my-class {
      color: ${"blue"}; /* Expression  using a string */
      font-size: ${16}px; /* Expression using a number */
      background-color: ${() =>
        getBackgroundColor()}; /* Expression using a function */
    }
  `;
  render() {
    return html`
      <div class="my-class">
        <!-- Content of your component -->
      </div>
    `;
  }
}

customElements.define("expresssion-styling", MyComponent);

function getBackgroundColor() {
  return "lightgray";
}
