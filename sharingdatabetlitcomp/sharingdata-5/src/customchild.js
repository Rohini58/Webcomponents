// ComponentB.js
import { LitElement, html, css } from 'lit';

export class ComponentB extends LitElement {
  handleClick() {
    const event = new CustomEvent('data-shared', {
      detail: 'Hello from Component B',
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html` <button @click="${this.handleClick}">Share Data</button> `;
  }
}
