class customele2 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`${this.getAttribute('name')}`

    }
}
window.customElements.define("custom-elem2",customele2)