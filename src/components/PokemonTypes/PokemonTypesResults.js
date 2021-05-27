import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showPokemonModal } from "../../redux/PokemonModalSlice";
import PokemonModal from "../PokemonModal";

const PokemonTypesResults = () => {
  const pokemons = useSelector((state) => state.types.fetchedPokemons);
  const pokemonUrls = useSelector((state) => state.types.pokemonsTypeUrls);
  const show = useSelector((state) => state.modal.show);
  const loading = useSelector((state) => state.types.loading);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  if (pokemonUrls === null) return <div>No pokemons in this category</div>;
  if (loading) return <div>Loading...</div>;
  if (!pokemons) return null;
  if (!pokemons[index]) return null;
  return (
    <div className="container">
      <div className="row">
        {pokemons.map((el, i) => (
          <div
            key={el.id}
            className="card"
            onClick={() => {
              dispatch(showPokemonModal());
              setIndex(i);
            }}
          >
            <div className="card-title">{el.name}</div>
            <div className="card-body">
              <img alt="" src={el.sprites.front_default} className="card-img" />
              <div className="card-text">height: {el.height}</div>
              <div className="card-text">weight: {el.weight}</div>
              <div className="card-text card-types">
                {el.types.map((el) => `${el.type.name} `)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <PokemonModal
        show={show}
        title={pokemons[index].name}
        frontImg={pokemons[index].sprites.front_default}
        backImg={pokemons[index].sprites.back_default}
        height={pokemons[index].height}
        weight={pokemons[index].weight}
        type={pokemons[index].types.map((el) => `${el.type.name} `)}
      />
    </div>
  );
};

export default PokemonTypesResults;
