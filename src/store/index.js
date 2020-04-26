import { configureStore } from "@reduxjs/toolkit";
import { characters } from "./characters";
import { filters } from "./filters";

export default configureStore({
  reducer: {
    characters: characters.reducer,
    filters: filters.reducer,
  },
});
