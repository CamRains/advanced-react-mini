import React from "react";
import myHOC from "./myHOC";

function Pokemon(props) {
  const pokeList = props.data.map(Pokemon => {
    return (
      <div className="pokemon-display" key={Pokemon.id}>
        <div>{Pokemon.name}</div>
        <div>
          <img src={Pokemon.imageUrl} alt="pokemon" />
        </div>
      </div>
    );
  });

  return <div>{pokeList}</div>;
}

export default myHOC(
  Pokemon,
  "https://api.pokemontcg.io/v1/cards?setCode=base1"
);
