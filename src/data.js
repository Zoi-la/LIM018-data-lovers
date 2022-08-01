// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};


//Funcion ordenar AZ
export const ordenarAZ = (data) => {
  function sortPokemon(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    // TODO: falta un caso por contemplar
  }
  return data.sort(sortPokemon);
};
//Funcion ordenar ZA

export const ordenarZA = (data) => {
  function sortPokemonZA(a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
  }
  return data.sort(sortPokemonZA);
};

//Funcion ordenar Asc
export const ordenarAsc = (data) => {
  function sortPokemonAsc(a, b) {
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
  }
  return data.sort(sortPokemonAsc)
};
//Funcion ordenar Desc
export const ordenarDesc = (data) => {
  function sortPokemonDesc(a, b) {
    if (a.num < b.num) {
      return 1;
    }
    if (a.num > b.num) {
      return -1;
    }
  }
  return data.sort(sortPokemonDesc)
};

//funcion Buscar
export const search = (data, enter) => {
  function buscarPokemon(x) {
    if (enter == x.name || enter == x.num) {
      return (x);
    }
  }
  return data.filter(buscarPokemon);
};

//filtrar por tipo

export const filtrar = (data, type) => {
  let pokemonType = data.filter((x) => x.type.includes(type));
  return pokemonType;
}

//
export const totalPorTipo = (data, type) => {
  // 1. declarar una variable que va a almacenar el resultado
  let pokemonResult  
  // 2. filtrar la data por el tipo
  let filterData = data.filter((x)=>x.type.includes(type))
  // 3. asignarle el length del array filtrado a la variable que almacena el resultado
  pokemonResult = filterData.length
  // 4. retornar la cantidad de pokemons con el tipo seleccionado
  return pokemonResult
}

export const totalPorTipoOptimizada = (data, type) => {
  return filtrar(data, type).length
}
