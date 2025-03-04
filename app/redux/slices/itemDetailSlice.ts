import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface itemDetailState {
  feedback: { toggle: boolean; value: string };
}

const initialState: itemDetailState = {
  feedback: { toggle: false, value: "" },
};

const itemDetailSlice = createSlice({
  name: "Item Detail",
  initialState,
  reducers: {
    toggleItemDetailFeedback: (
      state,
      action: PayloadAction<itemDetailState>
    ) => {
      state.feedback = action.payload.feedback;
    },
  },
});

export const { toggleItemDetailFeedback } = itemDetailSlice.actions;
export default itemDetailSlice.reducer;
