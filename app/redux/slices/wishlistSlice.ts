import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
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
    add: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (exists) state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<String>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, clear } = wishlistSlice.actions;
export default wishlistSlice.reducer;
