import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getNext, getPrevious } from "../../redux/PokemonListSlice";

const PaginationTemplate = () => {
  const dispatch = useDispatch();
  const prev = useSelector((state) => state.pokemons.previous);
  const next = useSelector((state) => state.pokemons.next);
  return (
    <div>
      <div className="container">
        <div className="row">
          <Pagination>
            {prev && (
              <Pagination.Prev
                onClick={() => {
                  dispatch(getPrevious());
                }}
              >
                Previous
              </Pagination.Prev>
            )}
            {next && (
              <Pagination.Next
                onClick={() => {
                  dispatch(getNext());
                }}
              >
                Next
              </Pagination.Next>
            )}
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default PaginationTemplate;
