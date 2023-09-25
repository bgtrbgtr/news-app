import { createSlice } from "@reduxjs/toolkit";

export interface SearchFormState {
  query: string;
  itemsOnPage: number;
  sortBy: string;
  page: number;
}

const initialState: SearchFormState = {
  query: "",
  itemsOnPage: 6,
  sortBy: "newest",
  page: 1,
};

export const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setItemsOnPage: (state, action) => {
      state.itemsOnPage = action.payload;
    },
    setSortBy: (state, action) => {
      switch (action.payload) {
        case "Sort by newest":
          state.sortBy = "newest";
          break;
        case "Sort by oldest":
          state.sortBy = "oldest";
          break;
        case "Sort by relevance":
          state.sortBy = "relevance";
          break;
        default:
          state.sortBy = "newest";
      }
    },
  },
});

export const { setQuery, setItemsOnPage, setSortBy } = searchFormSlice.actions;

export default searchFormSlice.reducer;
