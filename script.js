import pokemonArray from "./data/pokemon.js";

const container = document.querySelector(".card-container");
const button = document.querySelector("button");
const search = document.querySelector("#filter");
const limit = document.querySelector("#limit");
const types = document.querySelector("#types");

const allTypes = [];
pokemonArray.forEach((pokemon) => {
    pokemon.types.forEach((item) => {
        if (!allTypes.includes(item)) {
            allTypes.push(item);
        }
    });
});

allTypes.forEach((item) => {
    const option = document.createElement("option");
    option.innerHTML = item;
    types.append(option);
});

const displayPokemons = () => {
    container.innerHTML = "";
    let count = 0;
    pokemonArray.forEach((pokemon) => {
        if (!types.value || pokemon.types.includes(types.value)) {
            if (isNaN(parseInt(limit.value)) || count < limit.value) {
                if (!search.value || pokemon.name.toLowerCase().indexOf(search.value.toLowerCase()) >= 0) 
                {
                    const card = document.createElement("div");
                    card.classList.add("card");
                    const capitalisedName = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
                    const types = pokemon.types.join(" & ");
                    card.innerHTML = 
                    `<img src="${pokemon.sprite}" class="card__image">
                    <div class="card__content">
                        <div class="card__heading">${capitalisedName}</div>
                        <div class="card__text">${capitalisedName} (#${pokemon.id}) is a ${types} type pokemon.</div>
                    </div>`;
                    container.append(card);
                }
                count += 1;
            }
        }
    });
};

button.addEventListener("click", displayPokemons);

displayPokemons();
