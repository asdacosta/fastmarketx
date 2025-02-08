import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
  storeName: boolean;
  slogan: boolean;
  description: boolean;
  phoneNumber: boolean;
  whatsapp: boolean;
  mobileMoney: boolean;
  allNumbers: boolean;
  storeType: boolean;
  categories: boolean;
  businessHours: boolean;
  location: boolean;
  banner: boolean;
}

const initialState: FormState = {
  storeName: false,
  slogan: false,
  description: false,
  phoneNumber: false,
  whatsapp: false,
  mobileMoney: false,
  allNumbers: false,
  storeType: true,
  categories: false,
  businessHours: false,
  location: false,
  banner: false,
};

const createStoreFormSlice = createSlice({
  name: "createStoreForm",
  initialState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: boolean }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { setField } = createStoreFormSlice.actions;
export default createStoreFormSlice.reducer;
