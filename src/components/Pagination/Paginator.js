import React from "react";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { getPaginator } from "../../redux/PokemonListSlice";

const Paginator = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Form>
        <Form.Control
          onChange={(e) => {
            dispatch(getPaginator(e.target.value));
          }}
          as="select"
        >
          <option>20</option>
          <option>10</option>
          <option>30</option>
        </Form.Control>
      </Form>
    </div>
  );
};

export default Paginator;
