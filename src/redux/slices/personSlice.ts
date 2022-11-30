import { createSlice } from "@reduxjs/toolkit"
import { getPerson } from "../actions/getPerson"
import { getPersonMovies } from "../actions/getPersonMovies"

interface PersonState {
  personInfo: {},
  personMovies: [],
};

// add type of person state

const INITIAL_STATE: PersonState = {
  personInfo: {},
  personMovies: [],
};

export const personSlice = createSlice({
  name: "movie",
  initialState: INITIAL_STATE,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase( getPerson.fulfilled, (state, action) => {
      state.personInfo = action.payload
    })
    builder
    .addCase( getPersonMovies.fulfilled, (state, action) => {
      state.personMovies = action.payload.results
    })
  },
});