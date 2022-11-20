import { createSlice } from "@reduxjs/toolkit";
import { getGenreMovies } from "../actions/getGenreMovies";
import type { GenreMoviesResult } from "../actions/getGenreMovies";

const INITIAL_STATE = {
  movies: [] as GenreMoviesResult[],
  page: 1,
};

export const movieListSlice = createSlice({
  name: "movieList",
  initialState: INITIAL_STATE,
  reducers: {
    increasePage: (state) => {
      state.page = state.page +1
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(getGenreMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  },
})

export const { increasePage } = movieListSlice.actions;