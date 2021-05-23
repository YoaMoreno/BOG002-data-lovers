//export function sortData(dataPokemones,sortOrdenar)

export function sortData(dataPokemones, sortOrdenar){


  const ordenarPokemonName = dataPokemones.sort((a,b) => {
  if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
  if(a.name.toLowerCase()>b.name.toLowerCase()) return 1;
  return 0;

});

  const ordenarPokemonNumero = dataPokemones.sort((a,b) => {
  if(a.num<b.num) return -1;
  if(a.num>b.num) return 1;
  return 0;
});

    if (sortOrdenar === "Z-A"){
   return ordenarPokemonName.reverse();
}
  else {
  return ordenarPokemonName;
}

}

//funcion (filtrar)
export function filtrarType(data, userCondition){
const result = data.filtrarType(d=> d.status === userCondition);
 return data;
}

