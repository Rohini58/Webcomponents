// ParentComponent.js
import { LitElement, html } from 'lit';
import './WebSeriesForm.js';

export class WebSeries extends LitElement {
  constructor() {
    super();
    this.message = 'Hello from Parent';
  }

  handleClick() {
    // Define a method to be shared
    alert('Button clicked in Parent');
  }
  myFunction() {
    alert('Function in ComponentA');
  }
  render() {
    return html`
      <webseries-form .message=${this.message} .handleClick=${this.handleClick}>
      </webseries-form>
    `;
  }
}
