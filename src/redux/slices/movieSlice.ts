import { createSlice } from "@reduxjs/toolkit";
import { Cast, getCredits } from "../actions/getCredits";
import { getMovie, MovieInfo } from "../actions/getMovie";
import { getRecommendedMovies, RecommendedMovies } from "../actions/getRecommendedMovies";

interface MovieState {
  movieInfo: MovieInfo[] ;
  recommendedMovies: RecommendedMovies[] ;
  cast: Cast[] ;
}

const INITIAL_STATE: MovieState = {
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