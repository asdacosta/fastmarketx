import { createSlice } from "@reduxjs/toolkit";

const initialState: { cartOpen: boolean } = {
  cartOpen: false,
};

const cartDisplaySlice = createSlice({
  name: "cartDisplay",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    openCart: (state) => {
      state.cartOpen = true;
    },
    closeCart: (state) => {
      state.cartOpen = false;
    },
  },
});

export const { toggleCart, openCart, closeCart } = cartDisplaySlice.actions;
export default cartDisplaySlice.reducer;
