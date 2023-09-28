import { LitElement, html, css } from 'lit-element';

export class LionForm extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial;
    }

    form {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      background-color: #fff;
    }
    input[type='String'] {
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
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }
  `;

  constructor() {
    super();
    this.title = '';
    this.director = '';
    this.stars = '';
    this.platform = '';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <label for="fname">Title:</label><br />
        <input
          type="String"
          .value=${this.title}
          @input=${e => (this.title = e.target.value)}
        /><br />
        <label for="lname">Director:</label><br />
        <input
          type="String"
          .value=${this.director}
          @input=${e => (this.director = e.target.value)}
        /><br />
        <label for="lname">Stars:</label><br />
        <input
          type="String"
          .value=${this.stars}
          @input=${e => (this.stars = e.target.value)}
        /><br />
        <label for="lname">Platform:</label><br />
        <input
          type="String"
          .value=${this.platform}
          @input=${e => (this.platform = e.target.value)}
        /><br />
        <button type="submit">Add</button>
      </form>
    `;
  }

  handleSubmit(e) {
    e.preventDefault();
    // Assuming addWebSeries is a function to add the data to your application
    addWebSeries(this.title, this.director, this.stars, this.platform);

    // Clear the input fields
    this.title = '';
    this.director = '';
    this.stars = '';
    this.platform = '';
  }
}
