import { LitElement, html, css, property } from 'lit-element';

export class WebSeries extends LitElement {
  //@property({ type: Array }) webSeriesArray = [];
  //@property({ type: String }) newWebSeriesTitle = '';
  // @property({ type: String }) newWebSeriesDirector = '';
  //@property({ type: String }) newWebSeriesStars = '';
  //@property({ type: String }) newWebSeriesPlatform = '';

  constructor() {
    super();
    // Mock data for testing
    this.webSeriesArray = [
      {
        title: 'Series 1',
        director: 'Director 1',
        stars: 'Stars 1',
        platform: 'Platform 1',
      },
      // Add more web series objects here
    ];
  }

  static styles = css`
    .web-series-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  `;

  render() {
    return html`
      <div>
        <h2>Add New Web Series</h2>
        <input
          type="text"
          placeholder="Title"
          @input="${e => (this.newWebSeriesTitle = e.target.value)}"
        />
        <input
          type="text"
          placeholder="Director"
          @input="${e => (this.newWebSeriesDirector = e.target.value)}"
        />
        <input
          type="text"
          placeholder="Stars"
          @input="${e => (this.newWebSeriesStars = e.target.value)}"
        />
        <input
          type="text"
          placeholder="Streaming Platform"
          @input="${e => (this.newWebSeriesPlatform = e.target.value)}"
        />
        <button @click="${this.addWebSeries}">Add</button>
      </div>

      <div class="web-series-list">
        ${this.webSeriesArray.map(
          (webSeries, index) => html`
            <div>
              <p><strong>Title:</strong> ${webSeries.title}</p>
              <p><strong>Director:</strong> ${webSeries.director}</p>
              <p><strong>Stars:</strong> ${webSeries.stars}</p>
              <p><strong>Streaming Platform:</strong> ${webSeries.platform}</p>
              <button @click="${() => this.deleteWebSeries(index)}">
                Delete
              </button>
            </div>
          `
        )}
      </div>
    `;
  }

  addWebSeries() {
    const newWebSeries = {
      title: this.newWebSeriesTitle,
      director: this.newWebSeriesDirector,
      stars: this.newWebSeriesStars,
      platform: this.newWebSeriesPlatform,
    };
    this.webSeriesArray = [...this.webSeriesArray, newWebSeries];
    setTimeout(() => {
      this.deleteWebSeries(this.webSeriesArray.length - 1);
    }, 60000); // Delete after 1 minute

    // Clear input fields after adding
    this.newWebSeriesTitle = '';
    this.newWebSeriesDirector = '';
    this.newWebSeriesStars = '';
    this.newWebSeriesPlatform = '';
  }

  deleteWebSeries(index) {
    if (index >= 0 && index < this.webSeriesArray.length) {
      const newArray = [...this.webSeriesArray];
      newArray.splice(index, 1);
      this.webSeriesArray = newArray;
    }
  }
}

customElements.define('web-series-manager', WebSeriesManager);
