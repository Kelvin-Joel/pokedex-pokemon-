import React from "react";
import useStore from "../Store/index";

const PokemonList = () => {
  const { data_fetch, AddPokemonFavorite, user_global } = useStore();

  const Favorites = user_global.listFavoritos;

  return (
    <div className="pokemon">
      {data_fetch.map((pokemon) => (
        <div className="pokemon__card" key={pokemon.id}>
          <img className="pokemon__img" src={pokemon.sprites.other.dream_world.front_default} />
          <p>{pokemon.name}</p>
          {Favorites.filter((favorito) => favorito.id === pokemon.id).length <=
          0 ? (
            <button
              className="pokemon__btn flex-center"
              onClick={() =>
                AddPokemonFavorite({
                  id: pokemon.id,
                  image: pokemon.sprites.other.dream_world.front_default,
                  name: pokemon.name,
                })
              }
            >
              Add Favorito
            </button>
          ) : (
            <button
              className="pokemon__btn pokemon__btn--warning flex-center">
              Atrapado
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
