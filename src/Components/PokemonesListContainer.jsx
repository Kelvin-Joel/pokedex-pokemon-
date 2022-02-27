import React from "react";
import PokemonList from "./PokemonList";
import PokemonListFavorites from "./PokemonListFavorites";
import PokemonListNav from "./PokemonListNav";
import useStore from "../Store/index";

const PokemonesListContainer = () => {
  const { OpenListFavorites } = useStore();
  return (
    <div>
      {OpenListFavorites ? (
        <PokemonListFavorites />
      ) : (
        <div>
          {" "}
          <PokemonListNav />
          <PokemonList />
        </div>
      )}
    </div>
  );
};

export default PokemonesListContainer;
