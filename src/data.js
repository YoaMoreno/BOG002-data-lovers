export function sortData(data, sortOrdenar) {
  //console.log(data);
  const result = data.sort(function (a1, b2) {
    if (a1.name < b2.name) {
      return -1;
    }
    if (a1.name > b2.name) {
      return 1;
    }
    return 0;
  });



  if (sortOrdenar === "ZA") {
    return result.reverse();
  } else {
    return result;
  }
}

//funcion filtrar

export function filterRarity(dataPokemones, value) {

  const result = dataPokemones.filter(function (objetoPokemon) {
    // console.log(objetoPokemon)
    return objetoPokemon["pokemon-rarity"] === value
  })
  //console.log(result);
  return result;

}

//funcion estadistica

export function porcentaje(dataPokemones) {
    const result = {
    normal: 0,
    legendary: 0,
    mythic: 0,
  }

  // para cada pokemon si es normal entonces result.normal = result.normal + 1, lo mismo para legendary y mythic
  dataPokemones.forEach((pokemon) => {
    if (pokemon['pokemon-rarity'] === 'normal') {
      result.normal = result.normal + 1
    }
    if (pokemon['pokemon-rarity'] === 'legendary') {
      result.legendary = result.legendary + 1
    }
    if (pokemon['pokemon-rarity'] === 'mythic') {
      result.mythic = result.mythic + 1
    }
  });

  //dividir cada propiedad de result por la longitud del array pokemon
  result.normal = result.normal / dataPokemones.length * 100
  result.legendary = result.legendary / dataPokemones.length * 100
  result.mythic = result.mythic / dataPokemones.length * 100
  console.log(result)
  return result;


}
