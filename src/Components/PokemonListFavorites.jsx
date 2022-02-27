import React from "react";
import useStore from "../Store/index";

const PokemonListFavorites = () => {
  const { user_global, ShowFavoritesList, DeletePokemonFavorito } = useStore();

  return (
    <div>
      <h2 className="title_favoritos">Pokemon List Favorites</h2>
      <img
        src="/icons/close.png"
        className="btnClose"
        onClick={() => ShowFavoritesList()}
      />
      <div className="pokemones_grid">
        {user_global.listFavoritos.map((pokemon) => (
          <div key={pokemon.id} className="pokemon_card">
            <img src={pokemon.image} />
            <p>{pokemon.name}</p>
            <button
              className="btn_delete"
              onClick={() => DeletePokemonFavorito(pokemon)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonListFavorites;
