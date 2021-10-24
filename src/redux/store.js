import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./nav";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
