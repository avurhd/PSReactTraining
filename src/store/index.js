import { configureStore } from "@reduxjs/toolkit";
import { characters } from "./characters";

export default configureStore({
  reducer: {
    characters: characters.reducer,
  },
});
