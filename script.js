import pokemonArray from "./data/pokemon.js";

const container = document.querySelector(".card-container");
const searchButton = document.querySelector("button");
const searchInput = document.querySelector("#filter");
const limitInput = document.querySelector("#limit");
const typesDropdown = document.querySelector("#types");

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
    typesDropdown.append(option);
});

const displayPokemons = () => {
    container.innerHTML = "";
    let count = 0;
    pokemonArray.forEach((pokemon) => {
        if (!typesDropdown.value || pokemon.types.includes(typesDropdown.value))
        {
            if (isNaN(parseInt(limitInput.value)) || count < limitInput.value)
            {
                if (!searchInput.value || pokemon.name.toLowerCase().indexOf(searchInput.value.toLowerCase()) >= 0) 
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
                    count += 1;
                }
            }
        }
    });
};

searchButton.addEventListener("click", displayPokemons);

displayPokemons();
