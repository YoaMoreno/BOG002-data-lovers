// estas funciones son de ejemplo

//export const example = () => {
 // return 'example';


 export function sortData(dataPokemones, sortOrdenar){

  const ordenarPokemonName = dataPokemones.sort((a,b) => {
  if(a.name.toLowerCase()<b.name.toLowerCase()) return -1;
  if(a.name.toLowerCase()>b.name.toLowerCase()) return 1;
  return 0;
  
});

const ordenarPokemonNum = dataPokemones.sort((a,b) => {
  if(a.num<b.num) return -1;
  if(a.num>b.num) return 1;
  return 0;
});

if (sortOrdenar === "Z-A"){
  return result.reverse();
}
  else {
  return result;
}

//console.log(OrdenarPokemonNum);

//funcion (filtrar)
/*export function filtrarGeneration(dataPokemones,userCondition){
 const result = data.filtrar(d=> d.status === userCondition);
 return result;

}*/


