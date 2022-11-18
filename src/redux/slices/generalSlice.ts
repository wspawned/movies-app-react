import { createSlice } from "@reduxjs/toolkit";
import { getGenreMovies } from "../actions/getGenreMovies";
import { getGenres } from "../actions/getGenres";
import type { GenreMoviesResult } from "../actions/getGenreMovies";
import { type } from "os";

type staticMovieCategories = {
  id:string,
  name:string,
};

const STATIC_MOVIE_CATEGORIES:staticMovieCategories[] = [
  {id: 'popular', name: 'Popular'},
  {id: 'top_rated', name: 'Top Rated'},
  {id: 'upcoming', name: 'Upcoming'}
];

const INITIAL_STATE = {
  staticCategories: STATIC_MOVIE_CATEGORIES,
  genres: [],
  selectedMenuItem: STATIC_MOVIE_CATEGORIES[0] ,
  movies: [] as GenreMoviesResult[],
};

export const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedMenuItem: (state, action) => {
      state.selectedMenuItem = action.payload
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload.genres
    })
    .addCase(getGenreMovies.fulfilled, (state, action) => {
      state.movies = action.payload
    })
  },
})

export const { setSelectedMenuItem } = generalSlice.actions;

// Action creators are generated for each case reducer function