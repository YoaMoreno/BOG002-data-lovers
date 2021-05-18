//export function sortData(dataPokemones,sortOrdenar)

export function sortData(dataPokemones, sortOrdenar){

  const ordenarPokemonName = dataPokemones.sort((a,b) => {
  if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
  if(a.name.toLowerCase()>b.name.toLowerCase()) return 1;
  return 0;

  
 
});

/*const ordenarPokemonNumero = dataPokemones.sort((a,b) => {
  if(a.num<b.num) return -1;
  if(a.num>b.num) return 1;
  return 0;
});

/*if (sortOrdenar === "Z-A"){
  return dataPokemones.reverse();
}
  else {
  return dataPokemones;
}*/

console.log(OrdenarPokemonNum);

//funcion (filtrar)
/*export function filtrarTypo(dataPokemones,userCondition){
 const result = data.filtrar(d=> d.status === userCondition);
 return dataPokemones;
}

}*/
    

