

import React, { Component } from "react";
import "../../App.css";

export default function PokemonRender(props) {
  const pokeList = props.data.map(pokemon => {
    return (
      <div className="pokemon-display" key={pokemon.id}>
        <div>{pokemon.name}</div>
        <div>
          <img src={pokemon.imageUrl} alt="pokemon" />
        </div>
      </div>
    );
  });
  return <div>{pokeList}</div>;
}
