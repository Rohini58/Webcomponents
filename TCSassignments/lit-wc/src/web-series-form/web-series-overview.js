import { html, css, LitElement } from "lit-element";

class WebSeriesOverview extends LitElement {
  static styles = css`
    .card {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
    }
  `;
  static get properties() {
    return {
      cards: {
        type: Array,
      },
    };
  }
  constructor() {
    super();
    this.cards = [
      {
        title: "Spy",
        director: "Garry BH",
        stars: "Nikhil,Kajal",
        streamingPlatform: "Prime",
      },
      {
        title: "Kushi",
        director: "Maheshbabu",
        stars: "Samantha,Vijay",
        streamingPlatform: "Prime",
      },
    ];
  }

  render() {
    return html``;
  }
}

customElements.define("web-series-overview", WebSeriesOverview);
