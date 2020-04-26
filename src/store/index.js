import { configureStore } from "@reduxjs/toolkit";
import { characters } from "./characters";
import { filters } from "./filters";
import { nameFilters } from "./nameFilters";

export default configureStore({
  reducer: {
    characters: characters.reducer,
    filters: filters.reducer,
    nameFilters: nameFilters.reducer,
  },
});
