import React, { useEffect, useState, useSyncExternalStore } from "react";
import { getState, subscribe, fetchPokemons } from "./pokemonStore";

export const SyncExternalStoreExample = () => {
  const { pokemons } = useSyncExternalStore(subscribe, getState);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.length === 0 ? (
          <p>Loading...</p>
        ) : (
          pokemons.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)
        )}
      </ul>
    </div>
  );
};
