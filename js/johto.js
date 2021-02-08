// FETCH JOHTO POKEMON

const johtoPokedex = document.getElementById("johtoPokedex");

const pokeCache = {};

const fetchJohtoPokemon = () => {

    const promises = [];

    for (let i = 152; i <= 251; i++) {

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

        displayJohtoPokemon(pokemon);

    });

};

const displayJohtoPokemon = (pokemon) => {

    const pokemonHTMLString = pokemon.map(johtoPokemon => `
    <li class="card" onclick="selectJohtoPokemon(${johtoPokemon.id})">
        <img class="card-image" src="${johtoPokemon.image}"/>
        <h2 class="card-id">#${johtoPokemon.id}</h2>
        <h3 class="card-title">${johtoPokemon.name}</h3>
    </li>
    `).join('')

    johtoPokedex.innerHTML = pokemonHTMLString;

};

const selectJohtoPokemon = async (id) => {

    if (!pokeCache[id]) {

        const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const johtoPokemon = await res.json();
        pokeCache[id] = johtoPokemon;
        console.log(pokeCache)
        displayPopup(johtoPokemon);

    } else {

        displayPopup(pokeCache[id]);
        
    }

};

const displayPopup = (johtoPokemon) => {

    const type = johtoPokemon.types.map((type) => type.type.name).join(' & ')

    const image = johtoPokemon.sprites['front_default'];

    const htmlString = `
    <div class="popup">
        <button id="closeBtn" onclick="closePopup()">Close</button>
        <div class="card">
            <img class="card-image" src="${image}"/>
            <h2 class="card-id">#${johtoPokemon.id}</h2>
            <h3 class="card-title">${johtoPokemon.name}</h3>
            <h4 class="card-type">${type}</h4>
            <p class="card-attribute">${johtoPokemon.height}m & ${johtoPokemon.weight}kg</p>
        </div>
    </div>
    `;
    johtoPokedex.innerHTML = htmlString + johtoPokedex.innerHTML;
    console.log(htmlString);
};

const closePopup = () => {
    const popup = document.querySelector('.popup');
    popup.parentElement.removeChild(popup);
};

fetchJohtoPokemon();