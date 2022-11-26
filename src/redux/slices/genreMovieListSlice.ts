import { createSlice } from "@reduxjs/toolkit";
import { getGenreMovies } from "../actions/getGenreMovies";
import type { GenreMovie } from "../actions/getGenreMovies";

interface GenreMoviesState {
  movies: GenreMovie[];
}

const INITIAL_STATE:GenreMoviesState = {
  movies: [],
};

export const genreMovieListSlice = createSlice({
  name: "movieList",
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(getGenreMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  },
});
