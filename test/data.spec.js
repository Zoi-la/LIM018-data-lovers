import {ordenarAZ, ordenarZA, ordenarAsc, ordenarDesc,search,filtrar} from '../src/data.js';

let arrayObj =[{name:'alfa', num:'001'}, {name:'zapdos', num:'003'}, {name:'bulbasur', num:'002'}];
let arrayOrd= [{name:'alfa', num:'001'}, {name:'bulbasur', num:'002'}, {name:'zapdos', num:'003'}];
let arrayObj1 =[{name:'alfa', num:'001'}, {name:'zapdos', num:'003'}, {name:'bulbasur', num:'002'}];
let arrayOrd1 =[{name:'zapdos', num:'003'}, {name:'bulbasur', num:'002'}, {name:'alfa', num:'001'}];
let arrayObj2 =[{name:'alfa'}];
let arrayOrd2 =[{name:'alfa'}];


describe('ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('returns `ordenarAZ`', () => {
    expect(ordenarAZ(arrayObj)).toStrictEqual(arrayOrd);
  });
});

describe('ordenarZA', () => {
  it('is a function', () => {
    expect(typeof ordenarZA).toBe('function');
  });

it('returns `ordenarZA`', () => {
  expect(ordenarZA(arrayObj1)).toStrictEqual(arrayOrd1);
  });
});

describe('ordenarAsc', () => {
  it('is a function', () => {
    expect(typeof ordenarAsc).toBe('function');
  });

  it('returns `ordenarAsc`', () => {
    expect(ordenarAsc(arrayObj)).toStrictEqual(arrayOrd);
  });
});

describe('ordenarDesc', () => {
  it('is a function', () => {
    expect(typeof ordenarDesc).toBe('function');
  });

  it('returns `ordenarDesc`', () => {
    expect(ordenarDesc(arrayObj1)).toStrictEqual(arrayOrd1);
  });
});

describe('search', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });

  it('returns `search`', () => {
    expect(search(arrayObj2)).toStrictEqual(arrayOrd2);
  });
});



describe('filtrar', () => {
  it('is a function', () => {
    expect(typeof filtrar).toBe('function');
  });


  it('buscar coincidencia por nombre o numero', () => {
   let pokemonTest = [{"name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
      ]},
      {
        "num": "099",
        "name": "kingler",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        
        },
        "pokemon-rarity": "normal",
        "type": [
          "water"
        ]}]
    
   let pokemonTest2 = [{"name": "bulbasaur",
   "generation": {
     "num": "generation i",
     "name": "kanto"
   },
   "pokemon-rarity": "normal",
   "type": [
     "grass",
     "poison"
     ]}];

    expect(filtrar(pokemonTest, "poison")).toEqual(pokemonTest2);
 
  });

});