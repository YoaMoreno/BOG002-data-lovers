import data from '../src/data/pokemon/pokemon.js';
import {
  sortData,
  filterRarity,
  porcentaje
} from '../src/data.js';


const dataMuestra = [{
    "name": "bulbasur"
  },
  {
    "name": "ivysaur"
  },
  {
    "name": "charmander"
  }
]
const dataMuestraIgual = [{
  "name": "bulbasur"
},
{
  "name": "bulbasur"
},

]
const ordenarAZ = [{
    "name": "bulbasur"
  },
  {
    "name": "charmander"
  },
  {
    "name": "ivysaur"
  },
]
const ordenarZA = [{
    "name": "ivysaur"
  },
  {
    "name": "charmander"
  },
  {
    "name": "bulbasur"
  },
]
describe("Organizar alfabeticamente", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });
  it('debería retornar "pokemones a-z" para la opción ordenar AZ,ZA con una condicion AZ', () => {
    expect(sortData(dataMuestra, "AZ")).toEqual(ordenarAZ);
  });
  it('debería retornar "pokemones en orden ZA" para la condicion "ZA" ', () => {
    expect(sortData(dataMuestra, "ZA")).toEqual(ordenarZA);
  })
});
it('debería considerar pokemones iguales', () => {
  expect(sortData(dataMuestraIgual, "ZA")).toEqual(dataMuestraIgual);
})



describe("filterRarity debería ser una función", () => {
  it("is a function", () => {
    expect(typeof filterRarity).toBe("function");
  });
  it("al escoger mythic, debería retornar 2 pokemones", () => {
    expect(filterRarity(data.pokemon, 'mythic')).toHaveLength(2);
  });
});

describe("porcentaje", () => {
  it("calcula correcatmente", () => {
    const result = porcentaje(data.pokemon);
    expect(result.normal).toBe(95.61752988047809);
    expect(result.legendary).toBe(3.5856573705179287);
    expect(result.mythic).toBe(0.796812749003984);
  })
})
