class Slot extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement('template');
      template.innerHTML = `
      <style>
        slot {
          color:red;
        }
        ::slotted(h1) {
          color: blue
        }
        ::slotted([slot="footer"]) {
          color: green;
        }
        main ::slotted(*) {
          color:black
        }
      </style>
      <div>
        <slot name="header">Fallback content for header</slot>
       <main><slot>Fallback content for main</slot></main>
        <slot name="footer">Fallback content for footer</slot>
      </div>
      `
  
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(template.content.cloneNode(true));
  
    }
  }
  
  customElements.define("slot-example", Slot);




