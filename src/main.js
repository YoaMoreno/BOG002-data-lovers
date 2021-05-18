//import { example } from './data.js';

import data from './data/pokemon/pokemon.js';


const dataPokemones = data.pokemon;

const poke_container = document.getElementById('poke_container');
const pokemons_number = 251;


const contenedorTarjetas = document.getElementById("tarjetas");
for (let i = 0; i < dataPokemones.length; i++) {
  //console.log(dataPokemones[i].num, dataPokemones[i].name, dataPokemones[i].img, dataPokemones[i].type)
    // var element = document.createElement(tagName, [options]);
    const numeroPokemon = document.createElement("p");
    numeroPokemon.innerHTML = dataPokemones[i].num;
    document.getElementById("tarjetas").appendChild(numeroPokemon);

    const nombrePokemon = document.createElement("h2");
    nombrePokemon.innerHTML = dataPokemones[i].name;
    contenedorTarjetas.appendChild(nombrePokemon);

    const imagenPokemon = document.createElement("img");
    imagenPokemon.setAttribute("src",dataPokemones[i].img);
    contenedorTarjetas.appendChild(imagenPokemon);

    const typePokemon = document.createElement("p");
    typePokemon.innerHTML = dataPokemones[i].type[0];
    contenedorTarjetas.appendChild(typePokemon);

    
}

/*const contenedorPokemones = document.createElement("div");
contenedorPokemones.innerHTML = dataPokemones;
const id = document.getElementById("tarjetas");
const pokemon = getElementById("pokemon");
pokemon.InnerText = tarjetas.InnerText;*/
