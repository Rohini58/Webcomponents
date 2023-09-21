import { LitElement, html } from "lit";

class ConnectedCallbackComponent extends LitElement {
  constructor() {
    super();
    this.message = "Hello from connectedCallback!";
  }

  connectedCallback() {
    super.connectedCallback();

    // Add an event listener when the component is connected to the DOM
    this.addEventListener("click", this.handleClick);
  }

  handleClick() {
    alert("Component clicked!");
  }

  render() {
    return html`<p>${this.message}</p>`;
  }
}

customElements.define(
  "connected-callback-component",
  ConnectedCallbackComponent
);
