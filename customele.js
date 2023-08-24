class customele extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`Welcome`

    }
}
window.customElements.define("custom-elem",customele)