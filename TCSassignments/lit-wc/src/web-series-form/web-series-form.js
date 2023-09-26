import { html, css, LitElement } from "lit-element";

class WebSeriesForm extends LitElement {
  static styles = css`
    form {
    }
  `;

  static get properties() {
    return {
      title: {
        type: String,
      },
      director: {
        type: String,
      },
      star: {
        type: String,
      },
      streamingplatform: {
        type: string,
      },
    };
  }

  render() {
    return html`
      <form id="form">
        <label for="title"> Title:</label>
        <input id="title" type="text" />

        <label for="directors"> Directors:</label>
        <input id="directors" type="text" />

        <label for="stars"> Stars:</label>
        <input id="stars" type="text" />

        <label for="streamingplatform"> StreamingPlatform </label>
        <select id="select-platform">
          <option>Select One</option>
          <option value="Netflix">Netflix</option>
          <option value="AmazonPrime">AmazonPrime</option>
          <option value="Aha">Aha</option>
        </select>
        <button id="button" class="btn">Add</button>
      </form>
    `;
  }
}

customElements.define("web-series-form", WebSeriesForm);
