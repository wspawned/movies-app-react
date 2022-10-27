import { AnyAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  genres: [],
};


export const reducer = (state = INITIAL_STATE, action:AnyAction ) => {
  switch(action.type) {
    case "FETCH_GENRES":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// export const combinedReducers = combineReducers({reducer:reducer});