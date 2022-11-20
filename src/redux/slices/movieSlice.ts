import { createSlice } from "@reduxjs/toolkit";
import { getMovie } from "../actions/getMovie";

const INITIAL_STATE = {
  movie: [],
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
      state.movie = action.payload
    })
  },
})
