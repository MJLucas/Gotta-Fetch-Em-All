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

    // <p class="card-attribute">${kantoPokemon.height}m & ${kantoPokemon.weight}kg</p>

    kantoPokedex.innerHTML = pokemonHTMLString;
    
}

const selectKantoPokemon = async (id) => {

    const url = `http://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const kantoPokemon = await res.json();
    displayPopup(kantoPokemon);

}

const displayPopup = (kantoPokemon) => {
    console.log(kantoPokemon);
}

fetchKantoPokemon();

// FETCH JOHTO POKEMON

const johtoPokedex = document.getElementById("johtoPokedex");

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
    <li class="card">
        <img class="card-image" src="${johtoPokemon.image}"/>
        <h2 class="card-id">#${johtoPokemon.id}</h2>
        <h3 class="card-title">${johtoPokemon.name}</h3>
        <h4 class="card-type">${johtoPokemon.type}</h4>
    </li>
    `).join('')

    // <p class="card-attribute">${johtoPokemon.height}m & ${johtoPokemon.weight}kg</p>

    johtoPokedex.innerHTML = pokemonHTMLString;
    
}

fetchJohtoPokemon();

// FETCH HOENN POKEMON

const hoennPokedex = document.getElementById("hoennPokedex");

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
    <li class="card">
        <img class="card-image" src="${hoennPokemon.image}"/>
        <h2 class="card-id">#${hoennPokemon.id}</h2>
        <h3 class="card-title">${hoennPokemon.name}</h3>
        <h4 class="card-type">${hoennPokemon.type}</h4>
    </li>
    `).join('')

    // <p class="card-attribute">${hoennPokemon.height}m & ${hoennPokemon.weight}kg</p>

    hoennPokedex.innerHTML = pokemonHTMLString;
    
}

fetchHoennPokemon();

// FETCH SINNOH POKEMON

const sinnohPokedex = document.getElementById("sinnohPokedex");

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
    <li class="card">
        <img class="card-image" src="${sinnohPokemon.image}"/>
        <h2 class="card-id">#${sinnohPokemon.id}</h2>
        <h3 class="card-title">${sinnohPokemon.name}</h3>
        <h4 class="card-type">${sinnohPokemon.type}</h4>
    </li>
    `).join('')
    
    // <p class="card-attribute">${sinnohPokemon.height}m & ${sinnohPokemon.weight}kg</p>

    sinnohPokedex.innerHTML = pokemonHTMLString;
    
}

fetchSinnohPokemon();

// FETCH UNOVA POKEMON

const unovaPokedex = document.getElementById("unovaPokedex");

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
    <li class="card">
        <img class="card-image" src="${unovaPokemon.image}"/>
        <h2 class="card-id">#${unovaPokemon.id}</h2>
        <h3 class="card-title">${unovaPokemon.name}</h3>
        <h4 class="card-type">${unovaPokemon.type}</h4>
    </li>
    `).join('')

    // <p class="card-attribute">${unovaPokemon.height}m & ${unovaPokemon.weight}kg</p>

    unovaPokedex.innerHTML = pokemonHTMLString;
    
}

fetchUnovaPokemon();

// FETCH KALOS POKEMON

const kalosPokedex = document.getElementById("kalosPokedex");

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
    <li class="card">
        <img class="card-image" src="${kalosPokemon.image}"/>
        <h2 class="card-id">#${kalosPokemon.id}</h2>
        <h3 class="card-title">${kalosPokemon.name}</h3>
        <h4 class="card-type">${kalosPokemon.type}</h4>
    </li>
    `).join('')

    // <p class="card-attribute">${kalosPokemon.height}m & ${kalosPokemon.weight}kg</p>

    kalosPokedex.innerHTML = pokemonHTMLString;
    
}

fetchKalosPokemon();

// FETCH ALOLA POKEMON

const alolaPokedex = document.getElementById("alolaPokedex");

const fetchAlolaPokemon = () => {

    const promises = [];

    for (let i = 722; i <= 809; i++) {

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

        displayAlolaPokemon(pokemon);

    });

};

const displayAlolaPokemon = (pokemon) => {
    
    const pokemonHTMLString = pokemon.map(alolaPokemon => `
    <li class="card">
        <img class="card-image" src="${alolaPokemon.image}"/>
        <h2 class="card-id">#${alolaPokemon.id}</h2>
        <h3 class="card-title">${alolaPokemon.name}</h3>
        <h4 class="card-type">${alolaPokemon.type}</h4>
    </li>
    `).join('')

    // <p class="card-attribute">${alolaPokemon.height}m & ${alolaPokemon.weight}kg</p>

    alolaPokedex.innerHTML = pokemonHTMLString;
    
}

fetchAlolaPokemon();

// FETCH GALAR POKEMON

const galarPokedex = document.getElementById("galarPokedex");

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
    <li class="card">
        <img class="card-image" src="${galarPokemon.image}"/>
        <h2 class="card-id">#${galarPokemon.id}</h2>
        <h3 class="card-title">${galarPokemon.name}</h3>
        <h4 class="card-type">${galarPokemon.type}</h4>
    </li>
    `).join('')

    // <p class="card-attribute">${galarPokemon.height}m & ${galarPokemon.weight}kg</p>

    galarPokedex.innerHTML = pokemonHTMLString;
    
}

fetchGalarPokemon();