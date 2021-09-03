import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../reducers";
export const store = configureStore({
  reducer: useReducer,
});
