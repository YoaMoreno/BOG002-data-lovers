//import { sortData } from './data.js';


import data from './data/pokemon/pokemon.js';


//console.log(example, data);
const dataPokemones = data.pokemon;

function capturar() {
    console.log(dataPokemones)
    const ContenedorTarjetas = document.getElementById("Tarjetas");
    for (let i = 0; i < dataPokemones.length; i++) {
        console.log(
            dataPokemones[i].num, dataPokemones[i].name, dataPokemones[i].img);
        // var element = document.createElement(tagName, [options]);
        const numeroPokemon = document.createElement("p");
        numeroPokemon.innerHTML = dataPokemones[i].num;
        document.getElementById("Tarjetas").appendChild(numeroPokemon);

        const nombrePokemon = document.createElement("h2");
        nombrePokemon.innerHTML = dataPokemones[i].name;
        ContenedorTarjetas.appendChild(nombrePokemon);

        const imagenPokemon = document.createElement("img");
        imagenPokemon.setAttribute("src", dataPokemones[i].img);
        ContenedorTarjetas.appendChild(imagenPokemon);


    }
}

capturar(dataPokemones)