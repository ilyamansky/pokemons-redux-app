import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { getPokemon } from "../../redux/SearchSlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [query, setQuery] = useState("");
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(getPokemon(query));
    history.push("/search");
  };
  return (
    <div>
      <Form style={{ margin: 0, padding: 0 }} className="container">
        <Form.Group className="row">
          <Form.Control
            className="col-10"
            onChange={changeHandler}
            type="search"
            placeholder="Search pokemons!"
          />
          <Button className="col-2" type="submit" onClick={onClickHandler}>
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
