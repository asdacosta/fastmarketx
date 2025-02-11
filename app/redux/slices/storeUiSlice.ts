import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { active: string } = {
  active: "Dashboard",
};

const storeUiSlice = createSlice({
  name: "storeUi",
  initialState,
  reducers: {
    setStoreUi: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
  },
});

export const { setStoreUi } = storeUiSlice.actions;
export default storeUiSlice.reducer;
