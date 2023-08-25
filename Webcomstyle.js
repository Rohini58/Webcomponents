const template = document.createElement('template');
template.innerHTML = `
    <style>
    :host{
        /* for the shadow root */
        background-color: yellow;
        display: block;
      }
      :host(webcom-style){
        background-color: lightblue;
        display: block;
      }
      :host-context(main){
        background-color: pink;
      }
        ::slotted(*){
             color:green;
        }
        ::slotted(h1){
            color:purple;
        }
        
        </style>
        <div>
   
    <slot name="title">Default text if not title slot used in HTML</slot>
  </div>
  

`;
class Webcomstyle extends HTMLElement{
    constructor(){
        super();
        
    
        const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(template.content.cloneNode(true));
        

       
    }
}
customElements.define("webcom-style",Webcomstyle);

    
