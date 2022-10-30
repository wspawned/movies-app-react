import { applyMiddleware, configureStore, createStore } from '@reduxjs/toolkit';
import  thunkMiddleWare  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducer from './reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare));

export const store = createStore( combinedReducer , composedEnhancer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;