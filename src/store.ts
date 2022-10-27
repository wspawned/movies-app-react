import { applyMiddleware, configureStore, createStore } from '@reduxjs/toolkit';
import {  reducer } from './reducers/reducer';
import  thunkMiddleWare  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare));

export const store = createStore( reducer , composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;