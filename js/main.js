// LIST OF ALL POKEDEX GENERATIONS
// LIST OF POKEDEX GENERATIONS BY ORDER: 1 - 8 (MEGA COMING SOON)

// FETCH KANTO POKEMON

const kantoPokedex = document.getElementById("kantoPokedex");

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
    
    const pokemonHTMLString = pokemon.map(kantoPokemon => `
    <li class="card" onclick="selectKantoPokemon(${kantoPokemon.id})">
        <img class="card-image" src="${kantoPokemon.image}"/>
        <h2 class="card-id">#${kantoPokemon.id}</h2>
        <h3 class="card-title">${kantoPokemon.name}</h3>
        <h4 class="card-type">${kantoPokemon.type}</h4>
    </li>
    `).join('')

    kantoPokedex.innerHTML = pokemonHTMLString;
    
}

const selectKantoPokemon = async (id) => {

    const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const kantoPokemon = await res.json();
    displayPopup(kantoPokemon);

}

const displayPopup = (kantoPokemon) => {

    const type = kantoPokemon.types.map((type) => type.type.name).join(' & ')

    const htmlString = `
    <div class="popup">
        <button class="closePopup()">Close</button>
        <div class="card">
            <img class="card-image" src="${kantoPokemon.image}"/>
            <h2 class="card-id">#${kantoPokemon.id}</h2>
            <h3 class="card-title">${kantoPokemon.name}</h3>
            <h4 class="card-type">${type}</h4>
            <p class="card-attribute">${kantoPokemon.height}m & ${kantoPokemon.weight}kg</p>
        </div>
    </div>
    `
    console.log(htmlString);
}

fetchKantoPokemon();