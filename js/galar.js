// FETCH GALAR POKEMON

const galarPokedex = document.getElementById("galarPokedex");

const pokeCache = {};

const fetchGalarPokemon = () => {

    const promises = [];

    for (let i = 810; i <= 898; i++) {

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

        displayGalarPokemon(pokemon);

    });

};

const displayGalarPokemon = (pokemon) => {

    const pokemonHTMLString = pokemon.map(galarPokemon => `
    <li class="card" onclick="selectGalarPokemon(${galarPokemon.id})">
        <img class="card-image" src="${galarPokemon.image}"/>
        <h2 class="card-id">#${galarPokemon.id}</h2>
        <h3 class="card-title">${galarPokemon.name}</h3>
    </li>
    `).join('')

    galarPokedex.innerHTML = pokemonHTMLString;

};

const selectGalarPokemon = async (id) => {

    if (!pokeCache[id]) {

        const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const galarPokemon = await res.json();
        pokeCache[id] = galarPokemon;
        console.log(pokeCache)
        displayPopup(galarPokemon);

    } else {

        displayPopup(pokeCache[id]);
        
    }

};

const displayPopup = (galarPokemon) => {

    const type = galarPokemon.types.map((type) => type.type.name).join(' & ')

    const image = galarPokemon.sprites['front_default'];

    const htmlString = `
    <div class="popup">
        <button id="closeBtn" onclick="closePopup()">Close</button>
        <div class="card">
            <img class="card-image" src="${image}"/>
            <h2 class="card-id">#${galarPokemon.id}</h2>
            <h3 class="card-title">${galarPokemon.name}</h3>
            <h4 class="card-type">${type}</h4>
            <p class="card-attribute">${galarPokemon.height}m & ${galarPokemon.weight}kg</p>
        </div>
    </div>
    `;
    galarPokedex.innerHTML = htmlString + galarPokedex.innerHTML;
    console.log(htmlString);
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

fetchGalarPokemon();