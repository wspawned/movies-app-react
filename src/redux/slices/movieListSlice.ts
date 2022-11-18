import { createSlice } from "@reduxjs/toolkit";
import { getGenreMovies } from "../actions/getGenreMovies";
import type { GenreMoviesResult } from "../actions/getGenreMovies";

const INITIAL_STATE = {
  movies: [] as GenreMoviesResult[],
};

export const movieListSlice = createSlice({
  name: "movieList",
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(getGenreMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  },
})