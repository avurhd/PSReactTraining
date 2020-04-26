import { createSlice } from "@reduxjs/toolkit";

const filters = createSlice({
  name: "filters",
  initialState: {},
  reducers: {
    updateFilters: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value || state[key];
    },
  },
});
export { filters };
