import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "../actions/getGenres";

type staticMovieCategory = {
  id:string,
  name:string,
};

export const STATIC_MOVIE_CATEGORIES:staticMovieCategory[] = [
  {id: 'popular', name: 'Popular'},
  {id: 'top_rated', name: 'Top Rated'},
  {id: 'upcoming', name: 'Upcoming'}
];

type GeneralState = {
  staticCategories: staticMovieCategory[],
  genres: [],
  selectedMenuItem: {
    name: string,
    id:string,
  } ,
}

const INITIAL_STATE: GeneralState = {
  staticCategories: STATIC_MOVIE_CATEGORIES,
  genres: [],
  selectedMenuItem: {
    name: "",
    id:"",
  } ,
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
  },
})

export const { setSelectedMenuItem } = generalSlice.actions;

// Action creators are generated for each case reducer function