import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTypes = createAsyncThunk("types/getTypes", async () => {
  return axios
    .get("https://pokeapi.co/api/v2/type/")
    .then((res) => res.data.results);
});

export const getPokemonsTypeUrls = createAsyncThunk(
  "types/getPokemonsTypeUrls",
  async (pokemonType) => {
    return axios
      .get(`https://pokeapi.co/api/v2/type/${pokemonType}`)
      .then((response) => {
        const urls = response.data.pokemon.map((el) => el.pokemon.url);
        if (urls.length === 0) return null;
        return urls;
      });
  }
);

export const fetchPokemons = createAsyncThunk(
  "types/fetchPokemons",
  async (_, { getState }) => {
    const urls = getState().types.pokemonsTypeUrls;
    const requests = urls.map((el) => axios.get(el));
    console.log(requests);
    const res = await Promise.all(requests);
    const res1 = res.map((el) => el.data);
    console.log(res1);
    return res1;
  }
);

const authState = {
  pokemonTypes: [],
  pokemonsTypeUrls: [],
  fetchedPokemons: [],
  loading: false,
};

const pokemonTypesSlice = createSlice({
  name: "types",
  initialState: authState,
  extraReducers: {
    [getTypes.fulfilled]: (state, { payload }) => {
      state.pokemonTypes = payload.map((el) => el.name);
    },
    [getPokemonsTypeUrls.pending]: (state) => {
      state.loading = true;
    },
    [getPokemonsTypeUrls.fulfilled]: (state, action) => {
      state.pokemonsTypeUrls = action.payload;
      state.loading = false;
    },
    [fetchPokemons.pending]: (state) => {
      state.loading = true;
    },
    [fetchPokemons.fulfilled]: (state, action) => {
      state.fetchedPokemons = action.payload;
      state.loading = false;
    },
  },
});
const pokemonTypesReducer = pokemonTypesSlice.reducer;
export default pokemonTypesReducer;
