import { createSlice } from "@reduxjs/toolkit"
import { getPerson, PersonType } from "../actions/getPerson"
import { getPersonMovies, PersonMoviesApiType } from "../actions/getPersonMovies"

interface PersonState {
  personInfo: PersonType | {};
  personMovies: PersonMoviesApiType | {};
};

const INITIAL_STATE: PersonState = {
  personInfo: {},
  personMovies: {},
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
