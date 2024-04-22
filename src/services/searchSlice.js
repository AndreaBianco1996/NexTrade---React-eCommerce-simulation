import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const searchSlice = createSlice({
  name: "searchQuery",
  initialState,
  reducers: {
    addSearch(state, action) {
      state.searchQuery = action.payload;
    },
    removeSearch(state) {
      state.searchQuery = "";
    },
  },
});

export const { addSearch, removeSearch } = searchSlice.actions;

export default searchSlice.reducer;

export const getSearch = (state) => state.searchQuery.searchQuery;
