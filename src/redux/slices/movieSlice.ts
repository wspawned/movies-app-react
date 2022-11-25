import { createSlice } from "@reduxjs/toolkit";
import { getCredits } from "../actions/getCredits";
import { getMovie } from "../actions/getMovie";
import { getRecommendedMovies } from "../actions/getRecommendedMovies";

const INITIAL_STATE = {
  movieInfo: [],
  recommendedMovies: [],
  cast: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: INITIAL_STATE,
  reducers: {
    resetMovie: (state) => {
      state = INITIAL_STATE
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase( getMovie.fulfilled, (state, action) => {
      state.movieInfo = action.payload
    })
    builder
    .addCase( getRecommendedMovies.fulfilled, (state, action) => {
      state.recommendedMovies = action.payload
    })
    builder
    .addCase( getCredits.fulfilled, (state, action) => {
      state.cast = action.payload.cast
    })
  },
})

export const { resetMovie } = movieSlice.actions;