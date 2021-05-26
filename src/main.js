import { sortData, filterGeneration} from './data.js';

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
    const generacionPokemon = document.createElement('p');
    const imagenPokemon= document.createElement('img')
    

    nombrePokemon.textContent = data[i].name;
    numeroPokemon.textContent = data[i].num; 
    generacionPokemon.textContent = data[i].generation.num + " " + data[i].generation.name;
    imagenPokemon.src = data[i].img;
   
    
      
    pokemones.appendChild(nombrePokemon);
    pokemones.appendChild(numeroPokemon);
    pokemones.appendChild(generacionPokemon);
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



 const resultadoFilterGeneration = document.querySelector('.resultadoFilterGeneration');
 resultadoFilterGeneration.addEventListener('change', (event) => {
  const x = document.querySelector('section');
  x.innerHTML = ""; 
  const resultadoFilterGeneration = filterGeneration(dataPokemones, "generation i");
  
  mostrarOrdenar(resultadoFilterGeneration);
  console.log("filtro por", resultadoFilterGeneration)
});




  





 





 



  
