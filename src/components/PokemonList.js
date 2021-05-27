import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getPokemons } from "../redux/PokemonListSlice";
import { showPokemonModal } from "../redux/PokemonModalSlice";
import PaginationTemplate from "./Pagination/PaginationTemplate";
import PokemonModal from "./PokemonModal";
import Paginator from "./Pagination/Paginator";

const PokemonList = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modal.show);
  const pokemons = useSelector((state) => state.pokemons.pokemonsData);
  const loading = useSelector((state) => state.pokemons.loading);
  const url = useSelector((state) => state.pokemons.currentUrl);
  const limit = useSelector((state) => state.pokemons.limit);
  const offset = useSelector((state) => state.pokemons.offset);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    dispatch(getData()).then(() => dispatch(getPokemons()));
  }, [dispatch, url, limit, offset]);
  if (!pokemons[index]) return null;
  return (
    <div>
      <div className="container">
        <div className="row">
          <PaginationTemplate />
          <Paginator />
        </div>
      </div>
      {loading && <div>Loading...</div>}
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
                <img
                  alt=""
                  src={el.sprites.front_default}
                  className="card-img"
                />
                <div className="card-text">height: {el.height}</div>
                <div className="card-text">weight: {el.weight}</div>
                <div className="card-text card-types">
                  {el.types.map((el) => `${el.type.name} `)}
                </div>
              </div>
            </div>
          ))}
        </div>
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
export default PokemonList;
