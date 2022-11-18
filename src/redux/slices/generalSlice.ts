import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../actions/getGenres";


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
  selectedMenuItemName: STATIC_MOVIE_CATEGORIES[0].name.toUpperCase() ,
};

export const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedMenuItemName: (state, action) => {
      state.selectedMenuItemName = action.payload.toUpperCase()
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload.genres
    })
  },
})

export const { setSelectedMenuItemName } = generalSlice.actions;

// Action creators are generated for each case reducer function