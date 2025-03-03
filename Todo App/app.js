let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener("click", function(){
    let item = document.createElement('li');
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.style.marginLeft = "0.5rem"
    delbtn.classList.add(".delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = ''

});

ul.addEventListener("click", function(event){
    console.log("task Delete");
    // console.dir(event.target.nodeName);
    let listItem = event.target.parentElement;
    console.log(listItem);
    // listItem.style.color = "red"
    listItem.remove()

})


// for(delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         console.log("task delete")
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }