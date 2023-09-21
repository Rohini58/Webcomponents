import { LitElement, html } from "lit";

class CustomConstructorComponent extends LitElement {
  constructor() {
    // Call the constructor of the base class (LitElement)
    super();

    // Custom initialization logic
    this.message = "Hello from constructor!";
  }

  render() {
    return html`<p>${this.message}</p>`;
  }
}

customElements.define(
  "custom-constructor-component",
  CustomConstructorComponent
);
