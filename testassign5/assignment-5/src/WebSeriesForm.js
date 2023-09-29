// web-series-form.js
import { LitElement, html, css } from 'lit-element';

export class WebSeriesForm extends LitElement {
  static properties = {
    title: { type: String },
    director: { type: String },
    platform: { type: String },
    stars: { type: String },
  };
  constructor() {
    super(); //If we won't intialize it with empty strings we get undefined in all input fields when the page was loaded
    this.title = '';
    this.director = '';
    this.platform = '';
    this.stars = '';
  }

  static styles = css`
    form {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 5px;
      background-color: #fff;
    }

    input[type='text'] {
      width: 80%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }

    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 3px;
      padding: 10px 20px;
    }

    button:hover {
      background-color: #0056b3;
    }
  `;

  //e.target.value- used in event handlers to access the value of an HTML element that triggered an event

  //e-represents an event object It contains information about the event
  //that occurred, such as what element triggered it and what type of event it is.

  //e.target-is used to access the HTML element that triggered the event.

  //e.target.value-is used to retrieve the current value of the HTML element.

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <label for="title">Title:</label><br />
        <input
          type="text"
          id="title"
          .value=${this.title}
          @input=${e => (this.title = e.target.value)}
        /><br />

        <label for="director">Director:</label><br />
        <input
          type="text"
          id="director"
          .value=${this.director}
          @input=${e => (this.director = e.target.value)}
        /><br />
        <label for="stars">Stars:</label><br />
        <input
          type="text"
          id="stars"
          .value=${this.stars}
          @input=${e => (this.stars = e.target.value)}
        /><br />
        <label for="platform">Platform:</label><br />
        <input
          type="text"
          id="platform"
          .value=${this.platform}
          @input=${e => (this.platform = e.target.value)}
        /><br />
        <button type="submit">Add</button>
      </form>
    `;
  }

  handleSubmit(e) {
    //event object getting from the form when the form is submitted
    e.preventDefault(); //it prevents the default behavior associated with the event from occurring.

    // Create an event to send the data to the parent component
    const event = new CustomEvent('add-web-series', {
      //add-web-series is a custom event name, second is a detail property it will take objects as a parameters
      detail: {
        title: this.title,
        director: this.director,
        stars: this.stars,
        platform: this.platform, // These properties represent information about a web series.
      },
    });
    this.dispatchEvent(event); //is used to dispatch/ trigger the custom event on the current DOM element (this). It sends the custom event out into the DOM, making it available for other parts of the application to listen for and respond to.

    // Clear the input fields
    this.title = '';
    this.director = '';
    this.stars = '';
    this.platform = '';
  }
}
