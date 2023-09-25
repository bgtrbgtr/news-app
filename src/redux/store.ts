import { configureStore } from "@reduxjs/toolkit";
import newsfeedReducer from "./reducers/newsfeedSlice";
import searchFormSlice from "./reducers/searchFormSlice";

export const store = configureStore({
  reducer: {
    newsfeed: newsfeedReducer,
    searchFrom: searchFormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
