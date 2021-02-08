// FETCH KANTO POKEMON

const kantoPokedex = document.getElementById("kantoPokedex");

const pokeCache = {};

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
    </li>
    `).join('')

    kantoPokedex.innerHTML = pokemonHTMLString;

};

const selectKantoPokemon = async (id) => {

    if (!pokeCache[id]) {

        const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const kantoPokemon = await res.json();
        pokeCache[id] = kantoPokemon;
        console.log(pokeCache)
        displayPopup(kantoPokemon);

    } else {

        displayPopup(pokeCache[id]);
        
    }

};

const displayPopup = (kantoPokemon) => {

    const type = kantoPokemon.types.map((type) => type.type.name).join(' & ')

    const image = kantoPokemon.sprites['front_default'];

    const htmlString = `
    <div class="popup">
        <button id="closeBtn" onclick="closePopup()">Close</button>
        <div class="card">
            <img class="card-image" src="${image}"/>
            <h2 class="card-id">#${kantoPokemon.id}</h2>
            <h3 class="card-title">${kantoPokemon.name}</h3>
            <h4 class="card-type">${type}</h4>
            <p class="card-attribute">${kantoPokemon.height}m & ${kantoPokemon.weight}kg</p>
        </div>
    </div>
    `;
    kantoPokedex.innerHTML = htmlString + kantoPokedex.innerHTML;
    console.log(htmlString);
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

fetchKantoPokemon();