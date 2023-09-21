import { LitElement, html } from "lit";

class MyComponent extends LitElement {
  // Internal state property
  //These properties are not decorated with @property
  count = 0;

  incrementCount() {
    this.count++;
  }

  render() {
    return html`
      <p>Count: ${this.count}</p>
      <button @click="${this.incrementCount}">Increment</button>
    `;
  }
}

customElements.define("my-component", MyComponent);
