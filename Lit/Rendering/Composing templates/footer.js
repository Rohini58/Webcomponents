import { LitElement, html } from "lit";

class MyHeader extends LitElement {
  render() {
    return html` <header>Footere</header> `;
  }
}
customElements.define("my-footer", MyHeader);
