const pokeGens = {
    kanto: {start:1, end: 9 },
    johto: {start: 152, end: 160 },
    hoenn: {start: 252, end: 260 },
    sinnoh: {start: 387, end: 395 },
    unova: {start: 495, end: 503 },
    kalos: {start: 650, end: 658 },
    alola: {start: 722, end: 730 },
    galar: {start: 810, end: 818 },
    paldea: {start: 906, end: 914 },
};

async function getPokemon(gen) {
    const pokemonArr = [];
    for (let i = gen.start; i <= gen.end; i++) {
        pokemonArr.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    const response = await Promise.all(pokemonArr.map(url => fetch(url).then(res => res.json())));
    console.log(response);
}

getPokemon(pokeGens.kanto)
getPokemon(pokeGens.johto)
getPokemon(pokeGens.hoenn)
getPokemon(pokeGens.sinnoh)
getPokemon(pokeGens.unova)
getPokemon(pokeGens.kalos)
getPokemon(pokeGens.alola)
getPokemon(pokeGens.galar)
getPokemon(pokeGens.paldea)




const starter_pokemon = 1
// const starter_pokemon_number_kanto_end = 9

const fetchStarters = async () => {
    for (let i = starter_pokemon; i <= starter_pokemon +8 ; i++){
        await getPokemon(i)
    } 
}

async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    console.log(pokemon)
}

fetchStarters();



//Kanto
const fetchKantoStarters = async () => {
    for (let i = starter_pokemon_number_kanto_start; i <= starter_pokemon_number_kanto_end ; i++){
        await getPokemon(i)
    } 
}

async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    console.log(pokemon)
}

fetchKantoStarters();


//Johto
const starter_pokemon_number_johto_start = 152
const starter_pokemon_number_johto_end = 160

const fetchJohtoStarters = async () => {
    for (let i = starter_pokemon_number_johto_start; i <= starter_pokemon_number_johto_end ; i++){
        await getPokemon_johto(i)
    } 
}

async function getPokemon_johto(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon_johto = await response.json();
    console.log(pokemon_johto)
}

fetchJohtoStarters();


//Hoenn
const starter_pokemon_number_hoenn_start = 252
const starter_pokemon_number_hoenn_end = 260

const fetchHoennStarters = async () => {
    for (let i = starter_pokemon_number_hoenn_start; i <= starter_pokemon_number_hoenn_end ; i++){
        await getPokemon_hoenn(i)
    } 
}

async function getPokemon_hoenn(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon_hoenn = await response.json();
    console.log(pokemon_hoenn)
}

fetchHoennStarters();


//Sinnoh
const starter_pokemon_number_sinnoh_start = 387
const starter_pokemon_number_sinnoh_end = 395

const fetchSinnohStarters = async () => {
    for (let i = starter_pokemon_number_sinnoh_start; i <= starter_pokemon_number_sinnoh_end ; i++){
        await getPokemon_sinnoh(i)
    } 
}

async function getPokemon_sinnoh(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon_sinnoh = await response.json();
    console.log(pokemon_sinnoh)
}

fetchSinnohStarters();


//Unova
const starter_pokemon_number_unova_start = 495
const starter_pokemon_number_unova_end = 503

const fetchUnovaStarters = async () => {
    for (let i = starter_pokemon_number_unova_start; i <= starter_pokemon_number_unova_end ; i++){
        await getPokemon_unova(i)
    } 
}

async function getPokemon_unova(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon_unova = await response.json();
    console.log(pokemon_unova)
}

fetchUnovaStarters();


//Kalos
const starter_pokemon_number_kalos_start = 650
const starter_pokemon_number_kalos_end = 658

const fetchKalosStarters = async () => {
    for (let i = starter_pokemon_number_kalos_start; i <= starter_pokemon_number_kalos_end ; i++){
        await getPokemon_kalos(i)
    } 
}

async function getPokemon_kalos(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon_kalos = await response.json();
    console.log(pokemon_kalos)
}

fetchKalosStarters();


//Sinnoh
const starter_pokemon_number_alola_start = 722
const starter_pokemon_number_alola_end = 730

const fetchAlolaStarters = async () => {
    for (let i = starter_pokemon_number_sinnoh_start; i <= starter_pokemon_number_sinnoh_end ; i++){
        await getPokemon_sinnoh(i)
    } 
}

async function getPokemon_sinnoh(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon_sinnoh = await response.json();
    console.log(pokemon_sinnoh)
}

fetchAlolaStarters();

const starter_pokemon_number_galar_start = 810
const starter_pokemon_number_galar_end = 818

const starter_pokemon_number_paldea_start = 906
const starter_pokemon_number_paldea_end = 914