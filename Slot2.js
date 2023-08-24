class Slot extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
      template.innerHTML = `
      <div>
        <slot name="name">Fallback content for header</slot>
       
        <slot name="list">Fallback content for footer</slot>
      </div>
      `
  
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(template.content.cloneNode(true));
  
    }
  }
  
  customElements.define("slot-example", Slot);




