import { configureStore } from "@reduxjs/toolkit";
import decorReducer from "./decorSlice";
import soundReducer from "./soundSlice";

export const store = configureStore({
  reducer: {
    decor: decorReducer,
    sound: soundReducer,
  },
});
