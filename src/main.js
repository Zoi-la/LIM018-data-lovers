//import { } from '@babel/core';
import {} from './data.js';
import pokemon from './data/pokemon/pokemon.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
let root= document.querySelector('#root');
let showPokemon= ()=>{
    data.pokemon.forEach((pokemon)=>{    
        //creando caja
        let cajaPrincipal=document.createElement("div")
        cajaPrincipal.classList.add("cardPokemon");
        //creando imagen
        let imagen=document.createElement("img")
        imagen.src=pokemon.img;
        //creando número
        let numero= document.createElement("div");
        numero.innerHTML= "#"+ pokemon.num;
        //creando nombre
        let nombre= document.createElement("div");
        nombre.innerHTML= pokemon.name;
        //creando tipo
        let tipo= document.createElement("div");
        tipo.innerHTML=pokemon.type;
        //contener los datos dentro de la caja
        cajaPrincipal.appendChild(imagen) 
        cajaPrincipal.appendChild(numero)
        cajaPrincipal.appendChild(nombre)
        cajaPrincipal.appendChild(tipo)
        //agregarlo al root
        root.appendChild(cajaPrincipal);
    });
  }

showPokemon()
//console.log(filterData(8, 10))