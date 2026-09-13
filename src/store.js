import { configureStore } from "@reduxjs/toolkit";
import  decorReducer  from "./decorSlice";

export const store = configureStore({
  reducer: {
    decor: decorReducer,
  },
});
