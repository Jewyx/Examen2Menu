import data from "./data.js";
console.log(data);

const divcomidas = document.getElementById ("comidas")

data.map( (elemento) => {

divcomidas.innerHTML += `<div class="flex">
<img src=${elemento.img} alt=""/>
    <h1>${elemento.title}</h1>
    <h4>${elemento.price}$</h4>
    <p>${elemento.desc}</p>
    <hr>
    </div>`
    })



const b1 = document.getElementById ("b1")
const b2 = document.getElementById ("b2")
const b3 = document.getElementById ("b3")
const b4 = document.getElementById ("b4")

b1.addEventListener('click', Todos)
b2.addEventListener('click', Platillo)
b3.addEventListener('click', Bebida)
b4.addEventListener('click', Postres)

function Todos(evento){
    divcomidas.innerHTML=""
    data.map( (elemento) => {

        divcomidas.innerHTML += `<div class="flex">
        <img src=${elemento.img} alt=""/>
            <h1>${elemento.title}</h1>
            <h4>${elemento.price}$</h4>
            <p>${elemento.desc}</p>
            <hr>
            </div>`
            })
}

function Platillo(evento){
    divcomidas.innerHTML=""
    let datacategory = 'platillo';

    let filtrados = data.filter((data) => data.category === datacategory);
    
    filtrados.forEach( (elemento) => {
    
        divcomidas.innerHTML += `<div class="flex">
                    <img src=${elemento.img} alt=""/>
                    <h1>${elemento.title}</h1>
                    <h4>${elemento.price}$</h4>
                    <p>${elemento.desc}</p>
                    <hr>
                    </div>`
    })
}

function Bebida(evento){
divcomidas.innerHTML=""
let datacategory = 'bebida';

let filtrados = data.filter((data) => data.category === datacategory);

filtrados.forEach( (elemento) => {

    divcomidas.innerHTML += `<div class="flex">
                <img src=${elemento.img} alt=""/>
                <h1>${elemento.title}</h1>
                <h4>${elemento.price}$</h4>
                <p>${elemento.desc}</p>
                <hr>
                </div>`
})
}
function Postres(){
    divcomidas.innerHTML=""
    let datacategory = 'postre';
    
    let filtrados = data.filter((data) => data.category === datacategory);
    
    filtrados.forEach( (elemento) => {
    
        divcomidas.innerHTML += `<div class="flex">
                    <img src=${elemento.img} alt=""/>
                    <h1>${elemento.title}</h1>
                    <h4>${elemento.price}$</h4>
                    <p>${elemento.desc}</p>
                    <hr>
                    </div>`
    })
}


let datacategory = 'platillo';

let filtrados = data.filter((data) => data.category === datacategory);

filtrados.forEach( (elemento) => {

    divcomidas.innerHTML += `<div class="flex">
                <img src=${elemento.img} alt=""/>
                <h1>${elemento.title}</h1>
                <h4>${elemento.price}$</h4>
                <p>${elemento.desc}</p>
                <hr>
                </div>`
})

