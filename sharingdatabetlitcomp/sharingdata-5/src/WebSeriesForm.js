// ChildComponent.js
import { LitElement, html } from 'lit';

export class WebSeriesForm extends LitElement {
  static properties = {
    message: { type: String },
    handleClick: { type: Function },
    click: { type: Function },
  };
  connectedCallback() {
    super.connectedCallback();

    const webSeries = this.shadowRoot.querySelector('#myWebSeries');

    // Check if the webSeries component exists and has the myFunction method
    if (webSeries && webSeries.myFunction) {
      // Call the myFunction method when the button is clicked
      this.shadowRoot
        .querySelector('#clickButton')
        .addEventListener('click', () => {
          webSeries.myFunction();
        });
    }
  }

  render() {
    return html`
      <div>${this.message}</div>
      <button @click=${this.handleClick}>Click me</button>
      <button id="clickButton">ClickFunction</button>
    `;
  }
}
