import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const characters = createSlice({
  name: "characters",
  initialState: { list: [] },
  reducers: {
    update: (state, action) => {
      state.list = action.payload || [];
    },
  },
});

const { update } = characters.actions;

const fetchCharacters = () => (dispatch) => {
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

export { characters, fetchCharacters };
