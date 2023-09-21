import { LitElement, html, css, property } from "lit";

class MyComponent extends LitElement {
  @property({ type: String }) name = "Rohini Chavva";
  render() {
    return html` <p>Hello, ${this.name}!</p> `;
  }
}
const myComponent = document.querySelector("my-component");

// Changing the reactive property value
myComponent.name = "Rohini Gandham";

//Chaging the reactive property using the event
myComponent.addEventListener("name-changed", (event) => {
  console.log(`Name changed to: ${event.detail.value}`);
});

customElements.define("my-component", MyComponent);
