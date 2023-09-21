import { LitElement, html } from "lit";

class DisconnectedCallbackComponent extends LitElement {
  constructor() {
    super();
    this.message = "Hello from disconnectedCallback!";
  }

  connectedCallback() {
    super.connectedCallback();

    // Add an event listener when the component is connected to the DOM
    this.addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Remove the event listener when the component is disconnected from the DOM
    this.removeEventListener("click", this.handleClick);
  }

  handleClick() {
    alert("Component clicked!");
  }

  render() {
    return html`<p>${this.message}</p>`;
  }
}

customElements.define(
  "disconnected-callback-component",
  DisconnectedCallbackComponent
);
