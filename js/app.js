const pokemonContainer = document.querySelector(".pokemon-container");

async function getPokemons(limit, offset) {
    let datos = null;
    spinner.style.display = "block";
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            datos = data;
        }).catch(function (e) {
            console.error(e);
        })
    dataPokes = await getUrl(datos)
    return dataPokes;
}

async function getPokemon(url) {
    let datos = null;

    await fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        datos = data;

    }).catch(function (e) {
        console.error(e);
    })
    return datos;
}

async function getUrl(datos) {
    let data = datos;
    let info = [];
    let dataPokes = [];
    
    for (let i = 0; i < data.results.length; i++) {
        info.push(data.results[i].url);
    }
    for (let y = 0; y < info.length; y++) {
        dataPokes.push(await getPokemon(info[y]));
    }
    
    return dataPokes;
}