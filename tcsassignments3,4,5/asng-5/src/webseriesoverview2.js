// web-series-overview.js

import { LitElement, html, css } from 'lit-element';
import { webSeriesArray, deleteWebSeries } from '../web-series.js';

export class WebSeriesOverview2 extends LitElement {
  static styles = css``;

  render() {
    return html`
      <web-series></web-series>
      <div id="web-series-list">
        ${webSeriesArray.map(
          (series, index) => html`
            <div class="web-series-card">
              <h2>${series.title}</h2>
              <p>Director: ${series.director}</p>
              <p>Stars: ${series.stars}</p>
              <p>Platform: ${series.streamingPlatform}</p>
              <button @click=${() => this.handleDelete(index)}>Delete</button>
            </div>
          `
        )}
      </div>
    `;
  }

  handleDelete(index) {
    deleteWebSeries(index);
    // Force re-render to remove the deleted card
    this.requestUpdate();
  }
}
