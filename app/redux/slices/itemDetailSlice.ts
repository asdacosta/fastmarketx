import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartSlice";

interface itemDetailState {
  feedback: { toggle: boolean; value: string };
  itemData: CartItem;
}

const initialState: itemDetailState = {
  feedback: { toggle: false, value: "" },
  itemData: {
    id: "",
    name: "",
    categoryName: "",
    accountName: "",
    imageUrl: "",
    stock: 0,
    price: 0,
    quantity: 0,
  },
};

const itemDetailSlice = createSlice({
  name: "Item Detail",
  initialState,
  reducers: {
    toggleItemDetailFeedback: (
      state,
      action: PayloadAction<{ toggle: boolean; value: string }>
    ) => {
      state.feedback = action.payload;
    },
    setItemDetailsData: (state, action: PayloadAction<CartItem>) => {
      state.itemData = action.payload;
    },
  },
});

export const { toggleItemDetailFeedback, setItemDetailsData } =
  itemDetailSlice.actions;
export default itemDetailSlice.reducer;
