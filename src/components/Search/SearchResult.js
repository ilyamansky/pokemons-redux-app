import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PokemonModal from "../PokemonModal";
import { showPokemonModal } from "../../redux/PokemonModalSlice";

const SearchResult = () => {
  const pokemon = useSelector((state) => state.pokemon.pokemonData);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.show);
  const rejected = useSelector((state) => state.pokemon.rejected);
  const loading = useSelector((state) => state.pokemon.loading);

  if (rejected) return <div>No pokemon has been found! Try again!</div>;
  if (loading) return <div>Loading...</div>;
  if (pokemon === null) return <div>No pokemon has been found! Try again</div>;
  if (pokemon.length === 0) return null;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="card"
              onClick={() => {
                dispatch(showPokemonModal());
              }}
            >
              <div className="card-title">{pokemon.name}</div>
              <img alt="" src={pokemon.sprites.front_default} />
              <div className="card-text">height: {pokemon.height}</div>
              <div className="card-text">weight: {pokemon.weight}</div>
            </div>
          </div>
        </div>
      </div>
      <PokemonModal
        show={show}
        title={pokemon.name}
        frontImg={pokemon.sprites.front_default}
        backImg={pokemon.sprites.back_default}
        height={pokemon.height}
        weight={pokemon.weight}
        type={pokemon.types.map((el) => `${el.type.name} `)}
      />
    </div>
  );
};

export default SearchResult;
