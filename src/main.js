import data from './data/pokemon/pokemon.js';
import {ordenarAscendente} from './data.js';

let ordenar= document.getElementById("btn-ordenar");



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
showPokemon();

ordenar.addEventListener("click",e=>{
    e.preventDefault();
    root.innerHTML="";
    let pokemonOrdenado=ordenarAscendente(data.pokemon);
    for (let i=0; i<pokemonOrdenado.length;i++){
        showPokemon(pokemonOrdenado[i]);
    }
})

//console.log(filterData(8, 10))