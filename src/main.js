import {} from './data.js';

import data from './data/pokemon/pokemon.js';

const dataPokemones = data.pokemon;

console.log(dataPokemones)

//const items = document.getElementById("items")
//const templateCard = document.getElementById("template-card").content
document.getElementById ("Tarjetas").innerHTML = (dataPokemones. num + dataPokemones. name + dataPokemones.img)


  
    
    const contenedorCards = document.getElementById("Tarjetas");
    for (let i = 0; i < dataPokemones.length; i++) {
        console.log(dataPokemones[i].num, dataPokemones[i].name, dataPokemones[i].img)
        // var element = document.createElement(tagName, [options]);
        const numPokemon = document.createElement("p");
        numPokemon.innerHTML = dataPokemones[i].num;
        document.getElementById("numero1").appendChild(contenedorCards);

        const namePokemon = document.createElement("h2");
        namePokemon.innerHTML = dataPokemones[i].name;
        document.getElementById("nombre1").appendChild(contenedorCards);

        const imgPokemon = document.createElement("img");
        imgPokemon.innerHTML = dataPokemones[i].img;
        document.getElementById("Imagen1").appendChild(contenedorCards);
    }
    

    console.log(data)





    function sortData(dataPokemones){

        const ordenarPokemonName = dataPokemones.sort((a,b) => {
        if(a.name.toLowerCase()<b.name.toLowerCase()) {
        return -1;
        }
      
        if(a.name.toLowerCase()>b.name.toLowerCase()) {
        return 1;
        }
        return 0;
        });
      }
      console.log(dataPokemones)
      
      /*if (sortOrdenar === "Z-A"){
        return ordenarPokemonName.reverse();
      }
        else {
        return ordenarPokemonName;
      }
    
    console.log(OrdenarPokemonName);*/