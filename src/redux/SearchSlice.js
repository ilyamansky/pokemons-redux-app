import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemon = createAsyncThunk(
  "search/getPokemon",
  async (query) => {
    const querySearch = query.trim().toLowerCase();
    if (querySearch === "") return null;
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${querySearch}`)
      .then((res) => res.data);
  }
);

const authState = {
  loading: false,
  pokemonData: [],
  rejected: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState: authState,
  reducers: {},
  extraReducers: {
    [getPokemon.pending]: (state) => {
      state.rejected = false;
      state.loading = true;
    },
    [getPokemon.fulfilled]: (state, action) => {
      state.loading = false;
      state.pokemonData = action.payload;
    },
    [getPokemon.rejected]: (state) => {
      state.rejected = true;
    },
  },
});
const searchReducer = searchSlice.reducer;
export default searchReducer;
