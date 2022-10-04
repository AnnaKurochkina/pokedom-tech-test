import pokemonArray from "./data/pokemon.js";

const container = document.querySelector(".card-container");

pokemonArray.forEach((pokemon) => {
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
});