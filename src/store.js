import { configureStore } from "@reduxjs/toolkit";
import decorReducer from "./decorSlice";
import soundReducer from "./soundSlice";
import cateringReducer from "./cateringSlice"

export const store = configureStore({
  reducer: {
    decor: decorReducer,
    sound: soundReducer,
    catering: cateringReducer
  },
});
