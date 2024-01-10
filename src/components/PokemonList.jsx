const PokemonList = () => {
    const pokeGens = {
        kanto: {start:1, end: 9 },
        johto: {start: 152, end: 160 },
        hoenn: {start: 252, end: 260 },
        sinnoh:{start: 387, end: 395 },
        unova: {start: 495, end: 503 },
        kalos: {start: 650, end: 658 },
        alola: {start: 722, end: 730 },
        galar: {start: 810, end: 818 },
        paldea:{start: 906, end: 914 }
    };

    async function getPokemon(gen) {
        const pokemonArr = [];
            try {
                for (let i = gen.start; i <= gen.end; i++) {
                pokemonArr.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
            }
        const response = await Promise.all(pokemonArr.map(url => fetch(url).then(res => res.json())));
        console.log(response);
        } catch (err) {
        console.log("There was an error", err);
        }
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
}

export default PokemonList