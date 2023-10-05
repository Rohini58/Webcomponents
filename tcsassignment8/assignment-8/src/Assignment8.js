/*
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
      
      console.log(data[0].title);
      for (var i in data) {
        console.log(data[i].title);
      }
    

      data.forEach(item => {
        console.log(item.title);
      });
      this.fetchedData = data; // Update the property with the fetched data

      document.querySelector('h2').textContent = JSON.stringify(data); // to display the data in the webpage
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
}
*/

import { html, css, LitElement } from 'lit';
import { ajax } from '@lion/ajax';

export class Assignment8 extends LitElement {
  static styles = css``;

  render() {
    return html`
      <h1>Fetching..</h1>
      <button @click="${this.fetchData}">Fetch Data</button>
      <div id="dataContainer"></div>
    `;
  }
  // async keyword: is used to define an asynchronous function. It tells JavaScript that the function contains asynchronous operations that may involve waiting for results from external sources, such as an HTTP request in this case.

  //await keyword: is used within an async function to pause the execution of the function until the promise returned by the fetch function
  async fetchData() {
    try {
      const response = await fetch('http://localhost:3000/cardValue');
      const data = await response.json(); ////if we get response from the url it parses the response data as JSON using
      console.log(data);
      /*console.log(data[0].title);
      for (var i in data) {
        console.log(data[i].title);
      }
      */
      const titles = data.map(item => item.title); // Extract titles from the data array
      // console.log(titles); ["Runaway","sky","Avatar"] get the data in array format
      this.displayTitles(titles); //to  Display the titles on the webpage

      document.querySelector('h2').textContent = JSON.stringify(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  displayTitles(titles) {
    const dataContainer = this.shadowRoot.getElementById('dataContainer'); //it uses shadowrrot to access the Shadow DOM of the LitElement,
    if (dataContainer) {
      dataContainer.innerHTML = titles.map(title => `<p>${title}</p>`).join(''); // mapping over the titles array. For each title, it creates a <p> element containing the title value. The join('') method is used to join these HTML elements into a single string.
    } else {
      console.error('Element with ID "dataContainer" not found.');
    }
  }
}
