import React from "react";
import { useHistory } from "react-router-dom";

const HomeButton = () => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/");
  };
  return (
    <div className="container" style={{ margin: 0, padding: 0 }}>
      <div className="row">
        <div onClick={onClickHandler} className="btn btn-success col">
          Home
        </div>
      </div>
    </div>
  );
};

export default HomeButton;
