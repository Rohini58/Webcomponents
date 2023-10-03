// my-app.js
import { LitElement, html, css } from 'lit-element';

export class WebSeries extends LitElement {
  static styles = css``;

  constructor() {
    super();
    this.webSeriesData = []; //it initializes an empty array. it stores data about webseries
  }
  //<!--maps over the webSeriesData array here we have a custom element(webseries-overview) it maps for each item in the array, passing it properties like title, director, stars, and platform.

  render() {
    return html`
      <h1>WebSeries</h1>
      <webseries-form
        @add-web-series=${this.handleAddWebSeries}
      ></webseries-form>

      <div>
        ${this.webSeriesData.map(
          item => html`
            <webseries-overview
              .title=${item.title}
              .director=${item.director}
              .stars=${item.stars}
              .platform=${item.platform}
            ></webseries-overview>
          `
        )}
      </div>
    `;
  }

  handleAddWebSeries(event) {
    //is a custom method name it will trigger when webseries-detail element was called
    //  const { title, director, stars, platform } = event.detail; //destructing
    //If we remove this line and instead try to access the values without destructuring, you would need to explicitly reference each property using dot notation.
    const title = event.detail.title;
    const director = event.detail.director;
    const stars = event.detail.stars;
    const platform = event.detail.platform;
    this.webSeriesData.push({ title, director, stars, platform });
    this.requestUpdate('webSeriesData', []); //This update triggers a re-render of the component with the new data  (this.requestUpdate(newvalue,oldvalue))
    //When we pass an empty array like this it says update all properties that have changed. we can remove the [] this but When you provide an old value, it helps LitElement efficiently update the components state and trigger a re-render.
  }
}
