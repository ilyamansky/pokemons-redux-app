import React from "react";
import HomeButton from "./HomeButton";
import PokemonTypesForm from "./PokemonTypes/PokemonTypesForm";
import SearchForm from "./Search/SearchForm";

const NavMenu = () => {
  return (
    <div className="container">
      <div style={{ margin: 0, padding: 0 }} className="row">
        <div style={{ margin: 0, padding: 0 }} className="col-1">
          <HomeButton />
        </div>
        <div style={{ margin: 0, padding: 0 }} className="col-2">
          <PokemonTypesForm />
        </div>
        <div style={{ margin: 0, padding: 0 }} className="col-9">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
