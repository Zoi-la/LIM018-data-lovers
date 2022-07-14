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
  data.sort(sortPokemon);
};

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
