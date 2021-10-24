import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    open: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    change: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close, change } = navSlice.actions;

export default navSlice.reducer;
