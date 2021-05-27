import React from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { closePokemonModal } from "../redux/PokemonModalSlice";

const PokemonModal = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Modal
        animation={false}
        show={props.show}
        onHide={() => {
          dispatch(closePokemonModal());
        }}
      >
        <Modal.Header closeButton>{props.title}</Modal.Header>
        <Modal.Body>
          <img alt="" src={props.frontImg} />
          <img alt="" src={props.backImg} />
          <p>height: {props.height}</p>
          <p>weight: {props.weight}</p>
          <p>type: {props.type}</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => {
              dispatch(closePokemonModal());
            }}
            className="btn btn-primary"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PokemonModal;
