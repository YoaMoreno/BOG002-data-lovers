import data from './data/pokemon/pokemon.js';
import { sortData, filterRarity} from '../src/data.js';


const dataMuestra =[
  {"name": "bulbasur"},
  {"name": "ivysaur"},
  { "name": "charmander"}]
const ordenarAZ = [
  {"name": "bulbasur"},
  {"name": "charmander"},
  {"name": "ivysaur"},
]
const ordenarZA = [
  {"name": "ivysaur"},
  {"name": "charmander"},
  {"name": "bulbasur"},
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



  describe("filterRarity debería ser una función", () => {
  it("is a function", () => {
    expect(typeof filterRarity).toBe("function");
  });
  it("al escoger mythic, debería retornar 2 pokemones", () => {
    expect(filterRarity("mythic", data.pokemon)).toHaveLength(2);
  });
});