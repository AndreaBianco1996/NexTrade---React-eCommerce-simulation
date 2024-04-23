import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  price: { minPrice: 0, maxPrice: 0 },
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
    addMinPrice(state, action) {
      state.price.minPrice = action.payload;
    },
    addMaxPrice(state, action) {
      state.price.maxPrice = action.payload;
    },
  },
});

export const { addCategory, removeCategory, addMinPrice, addMaxPrice } =
  filtersSlice.actions;

export default filtersSlice.reducer;

export const getFilters = (state) => state.filters;
