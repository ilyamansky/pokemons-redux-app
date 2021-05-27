import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getTypes,
  getPokemonsTypeUrls,
  fetchPokemons,
} from "../../redux/PokemonTypesSlice";

const PokemonTypesForm = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types.pokemonTypes);
  const history = useHistory();
  const [query, setQuery] = useState("choose type");
  const onChangeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    dispatch(getPokemonsTypeUrls(e.target.value)).then(() =>
      dispatch(fetchPokemons())
    );
    e.target.value = 0;
    history.push("/types");
  };
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  return (
    <div>
      <Form>
        <Form.Control onChange={onChangeHandler} as="select">
          <option value="0">Type: {query} </option>
          {types.map((el) => (
            <option key={el}>{el}</option>
          ))}
        </Form.Control>
      </Form>
    </div>
  );
};

export default PokemonTypesForm;
