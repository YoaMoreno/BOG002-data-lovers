//import { sortData} from './data.js';

import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const dataPokemones = data . pokemon;

console.log(dataPokemones)

//const items = document.getElementById("items")
//const templateCard = document.getElementById("template-card").content
document.getElementById ("card"). innerHTML =
dataPokemones. num + dataPokemones. name + dataPokemones.img

  
    
    const contenedorCards = document.getElementById("card");
    for (let i = 0; i < dataPokemones.length; i++) {
        console.log(dataPokemones[i].num, dataPokemones[i].name, dataPokemones[i].img)
        // var element = document.createElement(tagName, [options]);
        const numPokemon = document.createElement("p");
        numPokemon.innerHTML = dataPokemones[i].num;
        document.getElementById("card").appendChild(numPokemon);

        const namePokemon = document.createElement("h2");
        namePokemon.innerHTML = dataPokemones[i].name;
        document.getElementById("card").appendChild(namePokemon);

        const imgPokemon = document.createElement("img");
        imgPokemon.innerHTML = dataPokemones[i].img;
        document.getElementById("card").appendChild(imgPokemon);
    }
    

    console.log(data)


