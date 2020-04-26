import { createSlice } from "@reduxjs/toolkit";

export const SORT_BY_TYPES = {
  ASC: 1,
  DESC: -1,
};

const nameFilters = createSlice({
  name: "nameFilters",
  initialState: { selected: [], input: "", sortByID: SORT_BY_TYPES.ASC },
  reducers: {
    addSelected: (state, action) => {
      state.selected = [...state.selected, action.payload];
    },
    deleteSelected: (state, action) => {
      state.selected = state.selected.filter((val) => val !== action.payload);
    },
    updateInput: (state, action) => {
      state.input = action.payload || "";
    },
    updateSortByID: (state, action) => {
      state.sortByID = action.payload;
    },
  },
});

const selectedNames = (state) => state.nameFilters.selected || [];
const nameFilterInput = (state) => state.nameFilters.input || "";
const sortByID = (state) => state.nameFilters.sortByID;

export const { addSelected, deleteSelected, updateInput,updateSortByID } = nameFilters.actions;
export { nameFilters, selectedNames, nameFilterInput, sortByID };
