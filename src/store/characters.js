import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const characters = createSlice({
  name: "characters",
  initialState: { list: [] },
  reducers: {
    update: (state, action) => {
      state.list = action.payload || [];
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
  },
});

const { update } = characters.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchCharacters())`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
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
