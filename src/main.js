import data from './data/pokemon/pokemon.js';
import {ordenarAZ,ordenarZA,ordenarAsc,ordenarDesc, search, filtrar, totalPorTipoOptimizada} from './data.js';
import pokemon from './data/pokemon/pokemon.js';
//import pokemon from './data/pokemon/pokemon.js';

let ordenar= document.getElementById("btn-ordenarAZ");
let ordenarZa=document.getElementById("btn-ordenarZA");
let ordenarAscendete=document.getElementById("btn-ordenarAsc");
let ordenarDescendente=document.getElementById("btn-ordenarDesc");
let btnSearch=document.getElementById("btn-search");
let filtra=document.getElementById("filtrar");
let totalTipo=document.getElementById("calcular");

let root= document.querySelector('#root');
let showPokemon= (arrayPokemon)=>{
    arrayPokemon.forEach((pokemon)=>{    
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
showPokemon(data.pokemon);

//About de pokemones
const infopoke=()=>{
    const datap=  data.pokemon;
    datap.forEach((element)=>{
            const namep = element.name
            const about = element.about
            console.log(about);
            console.log(namep);
                
        })
    
}


infopoke();

    ordenar.addEventListener("click",e=>{
        e.preventDefault();
        root.innerHTML="";
        ordenarAZ(data.pokemon);
        showPokemon(data.pokemon);
    });
    
    ordenarZa.addEventListener("click",e=>{
        e.preventDefault();
        root.innerHTML="";
        ordenarZA(data.pokemon);
        showPokemon(data.pokemon);
    });
    
    ordenarAscendete.addEventListener("click",e=>{
        e.preventDefault();
        root.innerHTML="";
        ordenarAsc(data.pokemon);
        showPokemon(data.pokemon);
    });
    
    ordenarDescendente.addEventListener("click",e=>{
        e.preventDefault();
        root.innerHTML="";
        ordenarDesc(data.pokemon);
        showPokemon(data.pokemon);
    });
    
    btnSearch.addEventListener("click",e=>{
        e.preventDefault();
        root.innerHTML="";
        let searchPokemon = document.getElementById("searchInput").value;
        let result = (search(data.pokemon,searchPokemon));
        showPokemon(result)
    });

filtra.addEventListener("click", function (element){
    //Si al hacer click en un tipo de id (grass,poison, etc),nos devuelva los pokemon filtrado por tipo,sino no haga nada.
    if(element.target.className==="pokemon"){
     root.innerHTML="";
     console.log("evento",element.target.id);
     let filtro = filtrar(data.pokemon, element.target.id)
     showPokemon(filtro)
    }
});
