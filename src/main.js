import { sortData, filterRarity} from './data.js';

import data from './data/pokemon/pokemon.js';

    const section = document.querySelector('section');
    const dataPokemones = data.pokemon;
  
    function mostrarOrdenar(data){
    //console.log(data);
      for (let i = 0; i< data.length; i++ ){
    //console.log(data.pokemon[i]);
     
    const pokemones = document.createElement('article');
    pokemones.className = "pokemon";
    const nombrePokemon = document.createElement ('h3')
    const numeroPokemon = document.createElement ('p');
    const rarityPokemon = document.createElement('p');
    const imagenPokemon= document.createElement('img')
    imagenPokemon.classList.add ('imgPokemon');

    nombrePokemon.textContent = data[i].name;
    numeroPokemon.textContent = data[i].num; 
    rarityPokemon.textContent = data[i]["pokemon-rarity"];
    imagenPokemon.src = data[i].img;
   
    
      
    pokemones.appendChild(nombrePokemon);
    pokemones.appendChild(numeroPokemon);
    pokemones.appendChild(rarityPokemon);
    pokemones.appendChild(imagenPokemon);
                                    
    
   
     section.appendChild(pokemones);

     
  }

  
}
    mostrarOrdenar(dataPokemones);
    //console.log(data);

    const mostrarOrdenarPokemones = document.querySelector('.mostrarOrdenarPokemones');
    //console.log(mostrarOrdenarPokemones);
    
    mostrarOrdenarPokemones.addEventListener('change', (event) => {
     const x = document.querySelector('section');
      x.innerHTML = ""; 
     const resultadoMostrarOrdenar = document.querySelector('.resultadoMostrarOrdenar');
      resultadoMostrarOrdenar.textContent = `Ordenar por ${event.target.value}`;
      //console.log(event.target.value)
       const result = sortData(dataPokemones, event.target.value);
      mostrarOrdenar(result);
      // console.log(result);
  });



 const elementoSelectfilterRarity= document.querySelector('.resultadoFilterRarity');
 elementoSelectfilterRarity.addEventListener('change', filtro)
  function filtro () { 
 const elementoSelectfilterRarity= document.querySelector('.resultadoFilterRarity');
   const valorSelect= (elementoSelectfilterRarity.value);
   //console.log(valorSelect)
  const x = document.querySelector('section');
  x.innerHTML = ""; 

  const resultadoFilterRarity = filterRarity(dataPokemones, valorSelect);
  
  mostrarOrdenar(resultadoFilterRarity);
  //console.log("filtro por", resultadoFilterRarity)
}



// function promedio
/*
function promedio(dataPokemones,) {
  const result ={
    "normal": 0,
    "legendary": 0,
    "mythic": 0,
    for (let i = 0; i< data.length; i+ ){
  }/*
  // para cada pokemon si es normal result.normal = result.normal + 1
  //dividir cada propiedad de result por la longitud del array pokemon
  return   
}*/
    
  

  





 





 



  
