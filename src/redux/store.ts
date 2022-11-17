import  thunkMiddleWare  from 'redux-thunk';
import {  configureStore } from '@reduxjs/toolkit';
import { generalSlice } from './slices/generalSlice';

const store = configureStore({
  reducer: {
    general: generalSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleWare),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;