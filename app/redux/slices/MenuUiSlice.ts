import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { active: string } = {
  active: "Jobs",
};

const menuUiSlice = createSlice({
  name: "menuUi",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
  },
});

export const { setMenu } = menuUiSlice.actions;
export default menuUiSlice.reducer;
