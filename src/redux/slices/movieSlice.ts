import { createSlice } from "@reduxjs/toolkit";
import { getMovie } from "../actions/getMovie";
import { getRecommendedMovies } from "../actions/getRecommendedMovies";

const INITIAL_STATE = {
  movieInfo: [],
  recommendedMovies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: INITIAL_STATE,
  reducers: {

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
  },
})
