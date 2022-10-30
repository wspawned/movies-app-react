import { AnyAction } from "@reduxjs/toolkit";

type staticMovieCategories = {
  id:string,
  name:string,
}

const STATIC_MOVIE_CATEGORIES:staticMovieCategories[] = [
  {id: 'popular', name: 'Popular'},
  {id: 'top_rated', name: 'Top Rated'},
  {id: 'upcoming', name: 'Upcoming'}
];

const INITIAL_STATE = {
  staticCategories: STATIC_MOVIE_CATEGORIES,
  genres: [],
  selectedMenuItemName: "Welcome",
};


export const generalReducer = (state = INITIAL_STATE, action:AnyAction ) => {
  switch(action.type) {
    case "FETCH_GENRES":
      return { ...state, ...action.payload };
    case "SET_SELECTED_MENU_ITEM_NAME":
      return { ...state, selectedMenuItemName: action.payload };
    default:
      return state;
  }
};

// export const combinedReducers = combineReducers({reducer:reducer});