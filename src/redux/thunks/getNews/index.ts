import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchFormState } from "@/redux/reducers/searchFormSlice";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getNews = createAsyncThunk(
  "news/fetch",
  async (
    { query, sortBy, itemsOnPage, page }: SearchFormState,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(
        `https://content.guardianapis.com/search?api-key=${API_KEY}&use-date=published&format=json&page=${page}&page-size=${itemsOnPage}&show-fields=all&order-by=${sortBy}&q=${query}`
      );
      return response.data.response.results;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue("Failed to fetch news");
      }
      throw error;
    }
  }
);
