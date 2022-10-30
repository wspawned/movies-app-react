import { combineReducers } from "@reduxjs/toolkit";
import { generalReducer } from "./generalReducer";

const combinedReducer = combineReducers({
  general:generalReducer,
})

export default combinedReducer;

