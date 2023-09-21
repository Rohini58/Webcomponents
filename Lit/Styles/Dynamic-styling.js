class MyComponent extends LitElement {
  toggleColor() {
    const element = this.shadowRoot.querySelector(".my-element");
    element.style.color = "red";
  }

  render() {
    return html`
      <div class="my-element">This text can change its color dynamically.</div>
      <button @click="${this.toggleColor}">Change Color</button>
    `;
  }
}
customElements.define("dynamic-styling", MyComponent);
