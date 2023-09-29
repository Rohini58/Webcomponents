// web-series-card.js
import { LitElement, html, css, property } from 'lit-element';

export class WebSeriesOverview extends LitElement {
  static styles = css`
    .card {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin: 10px;
      box-shadow: 0 2px 5px;
      background-color: #fff;
    }
  `;

  render() {
    return html`
      <div class="card">
        <h3>Title:${this.title.toUpperCase()}</h3>
        <p><strong>Director:</strong> ${this.director}</p>
        <p><strong>Stars:</strong> ${this.stars}</p>
        <p><strong>Platform:</strong> ${this.platform}</p>
      </div>
    `;
  }
}
