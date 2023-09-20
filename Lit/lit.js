import { LitElement, html, css } from "lit";

// Define a custom web component using LitElement
class MyLitComponent extends LitElement {
  // Define component properties
  static properties = {
    message: { type: String },
  };

  // Define component styles
  static styles = css`
    p {
      color: blue;
    }
  `;

  // Render the component's HTML template
  render() {
    return html` <p>${this.message}</p> `;
  }
}

// Define the custom element name
customElements.define("my-lit-component", MyLitComponent);
