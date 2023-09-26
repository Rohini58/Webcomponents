// web-series-form.js

import { LitElement, html, css } from 'lit-element';
import { addWebSeries } from '../web-series.js';

export class WebSeriesForm extends LitElement {
  static styles = css``;

  constructor() {
    super();
    this.title = '';
    this.director = '';
    this.stars = '';
    this.platform = '';
  }
  addWebSeries;
  render() {
    return html`
      <web-series></web-series>
      <form @submit=${this.handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          .value=${this.title}
          @input=${e => (this.title = e.target.value)}
        />
        <!-- Add input fields for director, stars, and platform here -->
        <button type="submit">Add</button>
      </form>
    `;
  }

  handleSubmit(e) {
    e.preventDefault();
    addWebSeries(this.title, this.director, this.stars, this.platform);
    this.title = '';
    this.director = '';
    this.stars = '';
    this.platform = '';
  }
}
