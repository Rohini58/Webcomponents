import { LitElement, html, property } from "lit";

class MyComponent extends LitElement {
  //ublic property are defined using the @property decorator
  @property({ type: String }) title = "Hello Rohini";

  render() {
    return html` <h1>${this.title}</h1> `;
  }
}

customElements.define("my-component", MyComponent);

// Using the component with a public property
const myComponent = document.querySelector("my-component");
myComponent.title = "Welcome to Hyd"; // Changes the title property
