import { example, ordenarAZ, ordenarZA, ordenarAsc, ordenarDesc } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

// Test ordenar AZ
let arrayObj =[{name:'alfa',}, {name:'zapdos'}, {name:'bulbasur'}];
let arrayOrd= [{name:'alfa'}, {name:'bulbasur'}, {name:'zapdos'}];

describe('ordenarAZ', () => {
  it('is a function', () => {
    expect(typeof ordenarAZ).toBe('function');
  });

  it('returns `ordenarAZ`', () => {
    expect(ordenarAZ(arrayObj)).toStrictEqual(arrayOrd);
  });
});

// Test ordenar ZA
let arrayObj_ordZA =[{name:'alfa',}, {name:'zapdos'}, {name:'bulbasur'}];
let arrayOrd_ordZA= [{name:'zapdos'}, {name:'bulbasur'}, {name:'alfa'}];

describe('ordenarZA', () => {
  it('is a function', () => {
    expect(typeof ordenarZA).toBe('function');
  });

  it('returns `ordenarZA`', () => {
    expect(ordenarZA(arrayObj_ordZA)).toStrictEqual(arrayOrd_ordZA);
  });
});

//Test ordenas Asc

let array_Obj =[{num:'001',}, {num:'009'}, {num:'006'}];
let array_Ord= [{num:'001'}, {num:'006'}, {num:'009'}];

describe('ordenarAsc', () => {
  it('is a function', () => {
    expect(typeof ordenarAsc).toBe('function');
  });

  it('returns `ordenarAsc`', () => {
    expect(ordenarAsc(array_Obj)).toStrictEqual(array_Ord);
  });
});

//Test ordenas Des

let array_Obj_Desc =[{num:'001',}, {num:'009'}, {num:'006'}];
let array_Ord_Desc= [{num:'009'}, {num:'006'}, {num:'001'}];

describe('ordenarDesc', () => {
  it('is a function', () => {
    expect(typeof ordenarDesc).toBe('function');
  });

  it('returns `ordenarDesc`', () => {
    expect(ordenarDesc(array_Obj_Desc)).toStrictEqual(array_Ord_Desc);
  });
});
