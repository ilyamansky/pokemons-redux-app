import { createSlice } from "@reduxjs/toolkit";

const authState = {
  show: false,
};

const pokemonModalSlice = createSlice({
  name: "modal",
  initialState: authState,
  reducers: {
    showPokemonModal: (state) => {
      state.show = true;
    },
    closePokemonModal: (state) => {
      state.show = false;
    },
  },
});
export const { showPokemonModal, closePokemonModal } =
  pokemonModalSlice.actions;
const pokemonModalReducer = pokemonModalSlice.reducer;
export default pokemonModalReducer;
