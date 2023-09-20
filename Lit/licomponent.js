import { LitElement, html } from "lit";

// Define a custom web component using LitElement
class MyLitComponent2 extends LitElement {
  // Render the component's HTML template
  render() {
    return html` <p>Welcome</p> `;
  }
}

// Define the custom element name
customElements.define("lit-2", MyLitComponent2);
