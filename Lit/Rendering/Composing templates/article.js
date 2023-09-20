import { LitElement, html } from "lit";

class MyHeader extends LitElement {
  render() {
    return html` <header>Article</header> `;
  }
}
customElements.define("my-article", MyHeader);
