import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { NewsItem } from "../thunks/getNews/types";
import { getNews } from "../thunks/getNews";
import { RootState } from "../store";

interface NewsfeedState {
  loading: boolean;
  error: SerializedError | null;
  news: NewsItem[];
}

const initialState: NewsfeedState = {
  loading: false,
  error: null,
  news: [],
};

export const newsfeedSlice = createSlice({
  name: "newsfeed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getNews.fulfilled,
        (state, action: PayloadAction<NewsItem[]>) => {
          state.loading = false;
          state.news = action.payload;
        }
      )
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.error : null;
      });
  },
});

export const selectNews = (state: RootState) => state.newsfeed.news;
// export const { setNewsList } = newsfeedSlice.actions;

export default newsfeedSlice.reducer;
