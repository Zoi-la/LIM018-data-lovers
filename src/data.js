// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};


//Funcion ordenar AZ
export const ordenarAZ = (data) => {
  function sortPokemon(a,b){
    if(a.name < b.name){
       return -1;
    }
    if(a.name > b.name){
       return 1;
    }
    // TODO: falta un caso por contemplar
 }
  return data.sort(sortPokemon);
};
//Funcion ordenar ZA

export const ordenarZA = (data) => {
  function sortPokemonZA(a,b){
    if (a.name<b.name){
      return 1;
    }
    if(a.name > b.name){
      return -1;
   }
  }
  data.sort(sortPokemonZA);
};

//Funcion ordenar Asc
export const ordenarAsc =(data)=>{
  function sortPokemonAsc(a,b){
  if (a.num<b.num){
    return -1;
  }
  if (a.num>b.num){
    return 1;
  }
  }
  data.sort(sortPokemonAsc)
}

//Funcion ordenar Desc
export const ordenarDesc=(data)=>{
  function sortPokemonDesc(a,b){
    if (a.num<b.num){
      return 1;
    }
      if (a.num>b.num){
        return -1;
      }
    }
    data.sort(sortPokemonDesc)
   }