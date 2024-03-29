const template=document.createElement('template')
template.innerHTML=`
<style>
h3{
   color: red;

}
</style>
<div class="shadow-dom">
<h3> </h3>

</div>



`;

class shadowdom extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText=this.getAttribute('name');

    }
}
window.customElements.define("shadow-dom",shadowdom);