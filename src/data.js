

//function sortData(dataPokemones, sortOrdenar){

 
export function sortData(data, sortOrdenar){
console.log(data);
  const result = data.sort(function (a1,b2)  {
    if (a1.name < b2.name){
      return -1;
    }
    if (a1.name > b2.name){
      return 1;
    }
    return 0;
  });
  
 

  if (sortOrdenar === "Z-A"){
    return result.reverse();
    } else {
    return result;
  }  
}

//funcion filtrar

export function filterRarity(dataPokemones, value){

  const result = dataPokemones.filter(function (objetoPokemon){
    console.log(objetoPokemon)
    return objetoPokemon["pokemon-rarity"]===value
  } )
  console.log(result);
  return result;
    
}


/*function promedio(dataPokemones,) {
  const result ={
    "normal": 0,
    "legendary": 0,
    "mythic": 0,*/
    
  
