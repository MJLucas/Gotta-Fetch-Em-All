// FETCH HOENN POKEMON

const hoennPokedex = document.getElementById("hoennPokedex");

const pokeCache = {};

const fetchHoennPokemon = () => {

    const promises = [];

    for (let i = 252; i <= 386; i++) {

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

        displayHoennPokemon(pokemon);

    });

};

const displayHoennPokemon = (pokemon) => {

    const pokemonHTMLString = pokemon.map(hoennPokemon => `
    <li class="card" onclick="selectHoennPokemon(${hoennPokemon.id})">
        <img class="card-image" src="${hoennPokemon.image}"/>
        <h2 class="card-id">#${hoennPokemon.id}</h2>
        <h3 class="card-title">${hoennPokemon.name}</h3>
    </li>
    `).join('')

    hoennPokedex.innerHTML = pokemonHTMLString;

};

const selectHoennPokemon = async (id) => {

    if (!pokeCache[id]) {

        const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const hoennPokemon = await res.json();
        pokeCache[id] = hoennPokemon;
        console.log(pokeCache)
        displayPopup(hoennPokemon);

    } else {

        displayPopup(pokeCache[id]);
        
    }

};

const displayPopup = (hoennPokemon) => {

    const type = hoennPokemon.types.map((type) => type.type.name).join(' & ')

    const image = hoennPokemon.sprites['front_default'];

    const htmlString = `
    <div class="popup">
        <button id="closeBtn" onclick="closePopup()">Close</button>
        <div class="card">
            <img class="card-image" src="${image}"/>
            <h2 class="card-id">#${hoennPokemon.id}</h2>
            <h3 class="card-title">${hoennPokemon.name}</h3>
            <h4 class="card-type">${type}</h4>
            <p class="card-attribute">${hoennPokemon.height}m & ${hoennPokemon.weight}kg</p>
        </div>
    </div>
    `;
    hoennPokedex.innerHTML = htmlString + hoennPokedex.innerHTML;
    console.log(htmlString);
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

fetchHoennPokemon();