import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "pokemons/getData",
  async (_, { getState }) => {
    const url = getState().pokemons.currentUrl;
    const limit = getState().pokemons.limit;
    const offset = getState().pokemons.offset;
    return axios
      .get(`${url}?limit=${limit}&offset=${offset}`)
      .then((res) => res.data);
  }
);
export const getPokemons = createAsyncThunk(
  "pokemons/getPokemons",
  async (_, { getState }) => {
    const urls = getState().pokemons.fetchedData;
    const requests = urls.map((el) => axios.get(el));
    const res = await Promise.all(requests);
    return res.map((el_1) => el_1.data);
  }
);

const authState = {
  limit: 20,
  offset: 0,
  currentUrl: "https://pokeapi.co/api/v2/pokemon/",
  loading: true,
  fetchedData: [],
  next: "",
  previous: "",
  pokemonsData: [],
};

const pokemonListSlice = createSlice({
  name: "pokemons",
  initialState: authState,
  reducers: {
    getNext: (state) => {
      state.offset = +state.offset + +state.limit;
    },
    getPrevious: (state) => {
      state.offset = state.offset - state.limit;
      if (+state.offset < 0) {
        state.offset = 0;
      }
    },
    getPaginator: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.next = payload.next;
      state.previous = payload.previous;
      state.fetchedData = payload.results.map((el) => el.url);
    },
    [getPokemons.fulfilled]: (state, action) => {
      state.pokemonsData = action.payload;
      state.loading = false;
    },
  },
});
export const { getNext, getPrevious, getPaginator } = pokemonListSlice.actions;
const pokemonListReducer = pokemonListSlice.reducer;
export default pokemonListReducer;
