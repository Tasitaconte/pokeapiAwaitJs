const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
limit = 10;
offset = 0;


previous.addEventListener("click", () => {
    if (offset != 0) {
        if (offset == 150) {
            limit = 10;
        }
        offset -= limit;
        removeChildNodes(pokemonContainer);
        pokes(offset);
    }
});

next.addEventListener("click", () => {
    if (offset != 150) {
        console.log();
        offset += limit;
        if (offset == 150) {
            limit = 1;
        }
        removeChildNodes(pokemonContainer);
        pokes(offset);
    }
});

async function pokes(id) {
    
    data = await getPokemons(limit, id);
    spinner.style.display = "none";

    insertData(data);
}

async function insertData(data) {
    let datos = data;
    for (let i = 0; i < datos.length; i++) {
        const card = document.createElement("div");
        const name = document.createElement("h4");
        const sprite = document.createElement("img");
        const id = document.createElement("h5");
        const exp = document.createElement("h5");

        name.classList.add("letraPokemon");
        card.classList.add("card","mx-auto","mt-1","cardTam");
        sprite.classList.add("card-img-top", "img-fluid", "imgTam");
        id.classList.add("textId");

        id.textContent = datos[i].id;
        sprite.src = datos[i].sprites.other.dream_world.front_default;
        name.textContent = datos[i].name;

        card.appendChild(id);
        card.appendChild(sprite);
        card.appendChild(name);
        card.appendChild(exp)

        pokemonContainer.appendChild(card);
    }
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

pokes(offset);