import { html, css, LitElement } from 'lit';

export class Asng3 extends LitElement {
  static styles = css``;

  render() {
    return html`
      <h1>webserisform</h1>
      <div>
        <label for="title">Title:</label>
        <input id="title" type="text" placeholder="Enter Title" />

        <label for="director">Director:</label>
        <input id="director" type="text" placeholder="Enter Director" />

        <label for="stars">Stars:</label>
        <input id="stars" type="text" placeholder="Enter Stars" />

        <label for="platform">Streaming Platform:</label>
        <input
          id="platform"
          type="text"
          placeholder="Enter Streaming Platform"
        />

        <button @click=${this.addWebSeries}>Add Web Series</button>
      </div>
    `;
  }
  addWebSeries() {
    // Get input elements by their IDs
    const titleInput = this.shadowRoot.querySelector('#title');
    const directorInput = this.shadowRoot.querySelector('#director');
    const starsInput = this.shadowRoot.querySelector('#stars');
    const platformInput = this.shadowRoot.querySelector('#platform');

    // Extract values from input fields
    const title = titleInput.value;
    const director = directorInput.value;
    const stars = starsInput.value;
    const platform = platformInput.value;

    // Check if all required fields are filled
    if (title && director && stars && platform) {
      // Create a custom event to add the web series
      const webSeriesEvent = new CustomEvent('web-series-add', {
        detail: { title, director, stars, platform },
      });

      // Dispatch the custom event
      this.dispatchEvent(webSeriesEvent); // the code dispatches (sends) the event using the dispatchEvent method.

      // Clear input fields after adding
      titleInput.value = '';
      directorInput.value = '';
      starsInput.value = '';
      platformInput.value = '';
    }
  }
}
