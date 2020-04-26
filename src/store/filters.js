import { createSlice } from "@reduxjs/toolkit";
import { FILTER_TYPES } from "../constants";

const getInitialFilters = () => {
  const state = {};
  FILTER_TYPES.map(({ value }) => {
    return (state[value] = []);
  });
  return state;
};
const filters = createSlice({
  name: "filters",
  initialState: getInitialFilters(),
  reducers: {
    updateFilters: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value || state[key];
    },
  },
});

const { updateFilters } = filters.actions;

const filterItemParams = (key) => {
  return {
    valueSelector: (state) => state.filters[key] || [],
    valueOnChange: (value = []) => (dispatch) =>
      dispatch(updateFilters({ key, value })),
  };
};
export { filters, filterItemParams };
