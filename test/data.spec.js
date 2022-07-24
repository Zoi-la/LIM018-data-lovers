import { example, ordenarAZ } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

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