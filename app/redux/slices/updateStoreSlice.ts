import { createSlice } from "@reduxjs/toolkit";

const initialState: { categoryType: boolean } = {
  categoryType: true,
};

const updateStoreSlice = createSlice({
  name: "updateStore",
  initialState,
  reducers: {
    enableCategoryType: (state) => {
      state.categoryType = true;
    },
    disableCategoryType: (state) => {
      state.categoryType = false;
    },
  },
});

export const { enableCategoryType, disableCategoryType } =
  updateStoreSlice.actions;
export default updateStoreSlice.reducer;
