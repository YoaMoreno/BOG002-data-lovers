

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

export  function filterGeneration(dataPokemones, userCondition){

  const result = dataPokemones.filter(d => d.generation.num.indexOf(userCondition)>=0 || d.generation.name.indexOf(userCondition)>=0);
  return result;
    
}


