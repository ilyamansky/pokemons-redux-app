import { configureStore } from "@reduxjs/toolkit";
import pokemonModalReducer from "./PokemonModalSlice";
import pokemonListReducer from "./PokemonListSlice";
import pokemonTypesReducer from "./PokemonTypesSlice";
import searchReducer from "./SearchSlice";

const store = configureStore({
  reducer: {
    pokemons: pokemonListReducer,
    pokemon: searchReducer,
    modal: pokemonModalReducer,
    types: pokemonTypesReducer,
  },
});
export default store;
