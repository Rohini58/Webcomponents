//New Form

import { LitElement, html, css } from 'lit-element';
import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-button.js';
import { Required, Validator } from '@lion/form-core';
import '@lion/ui/define/lion-select.js';

export class LionFormInputs extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial;
      max-width: 400px;
      margin-left: 35%;
      margin-top: 10%;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      background-color: #f5f5f5;
    }

    lion-form {
      display: block;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    lion-input,
    lion-select {
      margin-bottom: 20px;
    }

    lion-button {
      align-self: flex-start;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 3px;
      padding: 10px 20px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    lion-button:hover {
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
      <lion-form @submit=${this.handleSubmit}>
        <form>
          <lion-input
            label="Title"
            .modelValue=${this.title}
            @input=${e =>
              (this.title = this.capitalizeFirstLetter(e.target.modelValue))}
            .validators=${[
              new Required({}, { getMessage: () => 'Please enter a title' }),
              new NoNumericChars(),
            ]}
          >
          </lion-input>
          <lion-input
            label="director"
            .modelValue=${this.director}
            @input=${e =>
              (this.director = this.capitalizeFirstLetter(e.target.modelValue))}
            .validators=${[
              new Required({}, { getMessage: () => 'Please enter a title' }),
              new NoNumericChars(),
            ]}
          ></lion-input>
          <lion-input
            label="Stars"
            .modelValue=${this.stars}
            @input=${e =>
              (this.stars = this.capitalizeFirstLetter(e.target.modelValue))}
            .validators=${[
              new Required({}, { getMessage: () => 'Please enter a title' }),
              new NoNumericChars(),
            ]}
          ></lion-input>
          <lion-select
            name="Platform"
            label="Streaming Platform"
            .modelValue=${this.platform}
            .validators=${[
              new Required({}, { getMessage: () => 'Please enter a title' }),
              new NoNumericChars(),
            ]}
          >
            <select slot="input">
              <option selected hidden value>Please select</option>
              <option value="red">Netflix</option>
              <option value="hotpink">Hotstar</option>
              <option value="teal">Prime</option>
            </select>
          </lion-select>

          <lion-button raised type="submit">Add</lion-button>
        </form>
      </lion-form>
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
class NoNumericChars extends Validator {
  constructor() {
    super('noNumericChars');
  }

  execute(value) {
    const hasNumericChars = /\d/.test(value);
    return hasNumericChars ? new Error(this, { hasNumericChars }) : Success;
  }
}
