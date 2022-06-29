import { example, anotherExample } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example());
console.log(anotherExample());
console.log(data.pokemon[1].img);
console.log(data.pokemon[1].name);

let root= document.querySelector('#root');
let nombre= document.createElement("div");
nombre.innerHTML=data.pokemon[1].name;
root.appendChild(nombre);