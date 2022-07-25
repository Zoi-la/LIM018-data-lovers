import data from './data/pokemon/pokemon.js';
import {ordenarAZ,ordenarZA,ordenarAsc,ordenarDesc,search} from './data.js';

let ordenar= document.getElementById("btn-ordenarAZ");
let ordenarZa=document.getElementById("btn-ordenarZA");
let ordenarAscendete=document.getElementById("btn-ordenarAsc");
let ordenarDescendente=document.getElementById("btn-ordenarDesc");
let btnSearch=document.getElementById("btn-search");
let searchPokemon = document.getElementById("searchInput");
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
        /*/cajaPrincipal.appendChild(tipo)/*/
        //agregarlo al root
        root.appendChild(cajaPrincipal);
    });
}
showPokemon();

ordenar.addEventListener("click",e=>{
    e.preventDefault();
    root.innerHTML="";
    ordenarAZ(data.pokemon);
    showPokemon();
})

ordenarZa.addEventListener("click",e=>{
    e.preventDefault();
    root.innerHTML="";
    ordenarZA(data.pokemon);
    showPokemon();
})

ordenarAscendete.addEventListener("click",e=>{
    e.preventDefault();
    root.innerHTML="";
    ordenarAsc(data.pokemon);
    showPokemon();
})

ordenarDescendente.addEventListener("click",e=>{
    e.preventDefault();
    root.innerHTML="";
    ordenarDesc(data.pokemon);
    showPokemon();
})

btnSearch.addEventListener("click",e=>{
    e.preventDefault();
    root.innerHTML="";
    search(data.pokemon,searchPokemon.value.toLowerCase());
  showPokemon();  
}
)



