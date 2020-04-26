import { createSlice } from "@reduxjs/toolkit";

const nameFilters = createSlice({
  name: "nameFilters",
  initialState: { selected: [], input: "" },
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
  },
});

const selectedNames = (state) => state.nameFilters.selected || [];
const nameFilterInput = (state) => state.nameFilters.input || "";

export const { addSelected, deleteSelected, updateInput } = nameFilters.actions;
export { nameFilters, selectedNames, nameFilterInput };
