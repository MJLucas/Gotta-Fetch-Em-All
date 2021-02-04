// FETCH KANTO POKEMON

const kantoPokedex = document.getElementById("kantoPokedex");

console.log(kantoPokedex);

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
            type: data.types.map((type) => type.type.name).join(' & '),
            height: data.height,
            weight: data.weight
            
        }));

        displayKantoPokemon(pokemon);

    });

};

const displayKantoPokemon = (pokemon) => {
    
    console.log(pokemon);

    const pokemonHTMLString = pokemon.map(kantoPokemon => `
    <li class="card">
        <img class="card-image" src="${kantoPokemon.image}"/>
        <h2 class="card-id">#${kantoPokemon.id}</h2>
        <h3 class="card-title">${kantoPokemon.name}</h3>
        <h4 class="card-type">${kantoPokemon.type}</h4>
        <p class="card-attribute">${kantoPokemon.height}m & ${kantoPokemon.weight}kg</p>
    </li>
    `).join('')

    kantoPokedex.innerHTML = pokemonHTMLString;
    
}

fetchKantoPokemon();