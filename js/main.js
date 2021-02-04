// FETCH KANTO POKEMON

const pokedex = document.getElementById("pokedex");

console.log(pokedex);

const fetchKantoPokemon = () => {

    const promises = [];

    for (let i = 1; i <= 151; i++) {

        const url = `http://pokeapi.co/api/v2/pokemon/${i}`;

        promises.push(fetch(url).then((res) => res.json()));

    }

    Promise.all(promises).then((results) => {

        const pokemon = results.map((data) => ({

            id: data.id,
            name: data.name,
            image: data.sprites['front_default'],
            type: data.types.map((type) => type.type.name).join(', '),
            height: data.height,
            weight: data.weight
            
        }));

        displayKantoPokemon(pokemon);

    });

};

const displayKantoPokemon = (pokemon) => {
    console.log(pokemon);
}

fetchKantoPokemon();