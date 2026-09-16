import { configureStore } from "@reduxjs/toolkit";
import decorReducer from "./decorSlice";
import soundReducer from "./soundSlice";
import cateringReducer from "./cateringSlice";
import coupleExperienceReducer from "./coupleExperienceSlice";
import memoriesReducer from "./memoriesSlice";
import venueReducer from "./venueSlice";

export const store = configureStore({
  reducer: {
    decor: decorReducer,
    sound: soundReducer,
    catering: cateringReducer,
    coupleExperience: coupleExperienceReducer,
    memories: memoriesReducer,
    venue: venueReducer,
  },
});
