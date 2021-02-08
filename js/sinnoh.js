// FETCH SINNOH POKEMON

const sinnohPokedex = document.getElementById("sinnohPokedex");

const pokeCache = {};

const fetchSinnohPokemon = () => {

    const promises = [];

    for (let i = 387; i <= 493; i++) {

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

        displaySinnohPokemon(pokemon);

    });

};

const displaySinnohPokemon = (pokemon) => {

    const pokemonHTMLString = pokemon.map(sinnohPokemon => `
    <li class="card" onclick="selectSinnohPokemon(${sinnohPokemon.id})">
        <img class="card-image" src="${sinnohPokemon.image}"/>
        <h2 class="card-id">#${sinnohPokemon.id}</h2>
        <h3 class="card-title">${sinnohPokemon.name}</h3>
    </li>
    `).join('')

    sinnohPokedex.innerHTML = pokemonHTMLString;

};

const selectSinnohPokemon = async (id) => {

    if (!pokeCache[id]) {

        const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const sinnohPokemon = await res.json();
        pokeCache[id] = sinnohPokemon;
        console.log(pokeCache)
        displayPopup(sinnohPokemon);

    } else {

        displayPopup(pokeCache[id]);
        
    }

};

const displayPopup = (sinnohPokemon) => {

    const type = sinnohPokemon.types.map((type) => type.type.name).join(' & ')

    const image = sinnohPokemon.sprites['front_default'];

    const htmlString = `
    <div class="popup">
        <button id="closeBtn" onclick="closePopup()">Close</button>
        <div class="card">
            <img class="card-image" src="${image}"/>
            <h2 class="card-id">#${sinnohPokemon.id}</h2>
            <h3 class="card-title">${sinnohPokemon.name}</h3>
            <h4 class="card-type">${type}</h4>
            <p class="card-attribute">${sinnohPokemon.height}m & ${sinnohPokemon.weight}kg</p>
        </div>
    </div>
    `;
    sinnohPokedex.innerHTML = htmlString + sinnohPokedex.innerHTML;
    console.log(htmlString);
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

fetchSinnohPokemon();