import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  price: { minPrice: "", maxPrice: "" },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addCategory(state, action) {
      if (state.categories.includes(action.payload)) return;
      state.categories.push(action.payload);
    },
    removeCategory(state, action) {
      state.categories = state.categories.filter(
        (item) => item !== action.payload,
      );
    },
  },
});

export const { addCategory, removeCategory } = filtersSlice.actions;

export default filtersSlice.reducer;

export const getFilters = (state) => state.filters;
