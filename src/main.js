import { example, anotherExample } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example());
console.log(anotherExample());
console.log(data.pokemon[1].img);
console.log(data.pokemon[1].name);


let root= document.querySelector('#root');
data.pokemon.forEach((pokemon)=>{
    //creando caja
    let cajaPrincipal=document.createElement("div")
    cajaPrincipal.classList.add("cardPokemon");    
    //crear imagen
    let imagen=document.createElement("img")
    imagen.src=pokemon.img;
    //creando nombre
    let nombre= document.createElement("div");
    nombre.innerHTML=pokemon.name;
    //contener los datos dentro de la caja
    cajaPrincipal.appendChild(imagen)
    cajaPrincipal.appendChild(nombre)
    //agregarlo al root     
    root.appendChild(cajaPrincipal);
    
})