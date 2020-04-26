import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

export const characters = createSlice({
  name: "characters",
  initialState: { list: [] },
  reducers: {
    update: (state, action) => {
      console.log(action.payload);
      alert();
      state.list = action.payload || [];
    },
  },
});

export const { update } = characters.actions;

export const incrementAsync = (response = []) => (dispatch) => {
  dispatch(update(response));
};

export const fetchCharacters = () => (dispatch) => {
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(function (response) {
      // handle success

      dispatch(update(response.data.results));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

