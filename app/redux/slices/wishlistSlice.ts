import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: string;
  name: string;
}

interface WishlistState {
  items: WishlistItem[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
