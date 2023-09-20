// main.js
import { LitElement, html } from "lit";

class MyCounter extends LitElement {
  static properties = {
    count: { type: Number },
  };

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <div>
        <p>Count: ${this.count}</p>
        <button @click=${this.increment}>Increment</button>
      </div>
    `;
  }

  increment() {
    this.count++;
    this.requestUpdate("count"); // Notify Lit to update the 'count' property in the DOM. this tells the  Lit to re-render the component with the updated state.
  }
}

customElements.define("my-counter", MyCounter);
