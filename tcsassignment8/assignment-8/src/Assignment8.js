import { html, css, LitElement } from 'lit';
import { ajax } from '@lion/ajax';

export class Assignment8 extends LitElement {
  static styles = css``;

  render() {
    return html`
      <h1>Fetching..</h1>
      <button @click="${this.fetchData}">Fetch Data</button>
    `;
  }
  // async keyword: is used to define an asynchronous function. It tells JavaScript that the function contains asynchronous operations that may involve waiting for results from external sources, such as an HTTP request in this case.

  //await keyword: is used within an async function to pause the execution of the function until the promise returned by the fetch function
  async fetchData() {
    //fetchdata method is an asynchronous function that makes an HTTP GET request to url
    try {
      const response = await fetch('http://localhost:3000/cardValue'); // It awaits the response, and if successful
      const data = await response.json(); //if we get response from the url it parses the response data as JSON using
      console.log(data);
      document.querySelector('h2').textContent = JSON.stringify(data); // to display the data in the webpage
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
}
