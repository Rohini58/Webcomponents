import { LitElement, html } from "lit";

import "./header.js";
import "./article.js";
import "./footer.js";

class MyPage extends LitElement {
  render() {
    return html`
      <my-header></my-header>
      <my-article></my-article>
      <my-footer></my-footer>
    `;
  }
}
customElements.define("my-page", MyPage);
