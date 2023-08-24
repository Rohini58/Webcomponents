class Template extends HTMLElement{
    constructor(){
        super();
        //get the template
        const template=document.getElementById('texample');
        //clone the template 
        const node=document.importNode(template.content,true);
        //append in the dom
        document.body.appendChild(node)

        //create the template
        const templateElement=document.createElement("template");


         /* 
        templateElement.innerHTML=`
        <p>Inside the custom element </p>
        
        `
        //clone the template
        const cloneNode=document.importNode(templateElement.content,true);
        //append in the dom
        document.body.appendChild(cloneNode);
 */
    }
}
customElements.define("tem-example",Template);