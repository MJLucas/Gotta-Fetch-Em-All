// FETCH UNOVA POKEMON

const unovaPokedex = document.getElementById("unovaPokedex");

const pokeCache = {};

const fetchUnovaPokemon = () => {

    const promises = [];

    for (let i = 494; i <= 649; i++) {

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

        displayUnovaPokemon(pokemon);

    });

};

const displayUnovaPokemon = (pokemon) => {

    const pokemonHTMLString = pokemon.map(unovaPokemon => `
    <li class="card" onclick="selectUnovaPokemon(${unovaPokemon.id})">
        <img class="card-image" src="${unovaPokemon.image}"/>
        <h2 class="card-id">#${unovaPokemon.id}</h2>
        <h3 class="card-title">${unovaPokemon.name}</h3>
    </li>
    `).join('')

    unovaPokedex.innerHTML = pokemonHTMLString;

};

const selectUnovaPokemon = async (id) => {

    if (!pokeCache[id]) {

        const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const unovaPokemon = await res.json();
        pokeCache[id] = unovaPokemon;
        console.log(pokeCache)
        displayPopup(unovaPokemon);

    } else {

        displayPopup(pokeCache[id]);
        
    }

};

const displayPopup = (unovaPokemon) => {

    const type = unovaPokemon.types.map((type) => type.type.name).join(' & ')

    const image = unovaPokemon.sprites['front_default'];

    const htmlString = `
    <div class="popup">
        <button id="closeBtn" onclick="closePopup()">Close</button>
        <div class="card">
            <img class="card-image" src="${image}"/>
            <h2 class="card-id">#${unovaPokemon.id}</h2>
            <h3 class="card-title">${unovaPokemon.name}</h3>
            <h4 class="card-type">${type}</h4>
            <p class="card-attribute">${unovaPokemon.height}m & ${unovaPokemon.weight}kg</p>
        </div>
    </div>
    `;
    unovaPokedex.innerHTML = htmlString + unovaPokedex.innerHTML;
    console.log(htmlString);
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

fetchUnovaPokemon();