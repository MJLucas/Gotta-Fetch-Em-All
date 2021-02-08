// FETCH KALOS POKEMON

const kalosPokedex = document.getElementById("kalosPokedex");

const pokeCache = {};

const fetchKalosPokemon = () => {

    const promises = [];

    for (let i = 650; i <= 721; i++) {

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

        displayKalosPokemon(pokemon);

    });

};

const displayKalosPokemon = (pokemon) => {

    const pokemonHTMLString = pokemon.map(kalosPokemon => `
    <li class="card" onclick="selectKalosPokemon(${kalosPokemon.id})">
        <img class="card-image" src="${kalosPokemon.image}"/>
        <h2 class="card-id">#${kalosPokemon.id}</h2>
        <h3 class="card-title">${kalosPokemon.name}</h3>
    </li>
    `).join('')

    kalosPokedex.innerHTML = pokemonHTMLString;

};

const selectKalosPokemon = async (id) => {

    if (!pokeCache[id]) {

        const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const kalosPokemon = await res.json();
        pokeCache[id] = kalosPokemon;
        console.log(pokeCache)
        displayPopup(kalosPokemon);

    } else {

        displayPopup(pokeCache[id]);
        
    }

};

const displayPopup = (kalosPokemon) => {

    const type = kalosPokemon.types.map((type) => type.type.name).join(' & ')

    const image = kalosPokemon.sprites['front_default'];

    const htmlString = `
    <div class="popup">
        <button id="closeBtn" onclick="closePopup()">Close</button>
        <div class="card">
            <img class="card-image" src="${image}"/>
            <h2 class="card-id">#${kalosPokemon.id}</h2>
            <h3 class="card-title">${kalosPokemon.name}</h3>
            <h4 class="card-type">${type}</h4>
            <p class="card-attribute">${kalosPokemon.height}m & ${kalosPokemon.weight}kg</p>
        </div>
    </div>
    `;
    kalosPokedex.innerHTML = htmlString + kalosPokedex.innerHTML;
    console.log(htmlString);
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

fetchKalosPokemon();