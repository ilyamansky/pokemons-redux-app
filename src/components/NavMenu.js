import React from "react";
import HomeButton from "./HomeButton";
import PokemonTypesForm from "./PokemonTypes/PokemonTypesForm";
import SearchForm from "./Search/SearchForm";

const NavMenu = () => {
  return (
    <div className="container">
      <div style={{ margin: 0, padding: 0 }} className="row">
        <div style={{ margin: 0, padding: 0 }}>
          <HomeButton />
        </div>
        <div style={{ margin: 0, padding: 0 }}>
          <PokemonTypesForm />
        </div>
        <div style={{ margin: 0, padding: 0 }} >
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
