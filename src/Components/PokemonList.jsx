import React from "react";
import useStore from "../Store/index";

const PokemonList = () => {
  const { data_fetch, AddPokemonFavorite, user_global } = useStore();

  const Favorites = user_global.listFavoritos;

  return (
    <div className="pokemones_grid">
      {data_fetch.map((pokemon) => (
        <div className="pokemon_card" key={pokemon.id}>
          <img src={pokemon.sprites.other.dream_world.front_default} />
          <p>{pokemon.name}</p>
          {Favorites.filter((favorito) => favorito.id === pokemon.id).length <=
          0 ? (
            <span
              className="btn_captured flex-center"
              onClick={() =>
                AddPokemonFavorite({
                  id: pokemon.id,
                  image: pokemon.sprites.other.dream_world.front_default,
                  name: pokemon.name,
                })
              }
            >
              Add Favorito
            </span>
          ) : (
            <span
              className="btn_captured flex-center">
              Atrapado
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
