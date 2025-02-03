import { createSlice } from "@reduxjs/toolkit";

const initialState: { menuOpen: boolean } = {
  menuOpen: false,
};

const menuDisplay = createSlice({
  name: "menuDisplay",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    openMenu: (state) => {
      state.menuOpen = true;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
  },
});

export const { toggleMenu, openMenu, closeMenu } = menuDisplay.actions;
export default menuDisplay.reducer;
