import { createSlice } from "@reduxjs/toolkit";

const initialState: { cartOpen: boolean; menuOpen: boolean } = {
  cartOpen: false,
  menuOpen: false,
};

const componentDisplay = createSlice({
  name: "componentDisplay",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    openCart: (state) => {
      state.cartOpen = true;
      state.menuOpen = false;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
    openMenu: (state) => {
      state.menuOpen = true;
      state.cartOpen = false;
    },
    closeMenu: (state) => {
      state.menuOpen = false;
    },
  },
});

export const { toggleCart, openCart, closeCart, openMenu, closeMenu } =
  componentDisplay.actions;
export default componentDisplay.reducer;
