import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Form values reducer
export interface BusinessHoursState {
  mon: { from: string; to: string; alwaysOpen: boolean };
  tue: { from: string; to: string; alwaysOpen: boolean };
  wed: { from: string; to: string; alwaysOpen: boolean };
  thu: { from: string; to: string; alwaysOpen: boolean };
  fri: { from: string; to: string; alwaysOpen: boolean };
  sat: { from: string; to: string; alwaysOpen: boolean };
  sun: { from: string; to: string; alwaysOpen: boolean };
}

export interface FormValue {
  storeName: string;
  slogan: string;
  description: string;
  allNumbers: { phone: string; whatsapp: string; momo: string };
  storeType: string;
  categories: string[];
  businessHours: BusinessHoursState;
  location: { lat: number; lng: number } | null;
  banner: string | null;
  logo: { icon: number; color: string; bg: string };
}

const initialState: FormValue = {
  storeName: "",
  slogan: "",
  description: "",
  allNumbers: { phone: "", whatsapp: "", momo: "" },
  storeType: "products",
  categories: [],
  businessHours: {
    mon: { from: "", to: "", alwaysOpen: false },
    tue: { from: "", to: "", alwaysOpen: false },
    wed: { from: "", to: "", alwaysOpen: false },
    thu: { from: "", to: "", alwaysOpen: false },
    fri: { from: "", to: "", alwaysOpen: false },
    sat: { from: "", to: "", alwaysOpen: false },
    sun: { from: "", to: "", alwaysOpen: false },
  },
  location: null,
  banner: null,
  logo: { icon: 1, color: "#FFFFFF", bg: "#E8CD04" },
};

const storeFormValueSlice = createSlice({
  name: "Store Form Values",
  initialState,
  reducers: {
    setStoreNameValue: (state, action: PayloadAction<string>) => {
      state.storeName = action.payload;
    },
    setSloganValue: (state, action: PayloadAction<string>) => {
      state.slogan = action.payload;
    },
    setDescriptionValue: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setAllNumbersValue: (
      state,
      action: PayloadAction<{ phone: string; whatsapp: string; momo: string }>
    ) => {
      state.allNumbers = action.payload;
    },
    setStoreTypeValue: (state, action: PayloadAction<string>) => {
      state.storeType = action.payload;
    },
    setCategoriesValue: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setBusinessHoursValue: (
      state,
      action: PayloadAction<BusinessHoursState>
    ) => {
      state.businessHours = action.payload;
    },
    setLocationValue: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>
    ) => {
      state.location = action.payload;
    },
    setBannerValue: (state, action: PayloadAction<string>) => {
      state.banner = action.payload;
    },
    setLogoValue: (
      state,
      action: PayloadAction<{ icon: number; color: string; bg: string }>
    ) => {
      state.logo = action.payload;
    },
  },
});

// Form state reducer

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

const initialFormState: FormState = {
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

const storeFormStateSlice = createSlice({
  name: "Store From State",
  initialState: initialFormState,
  reducers: {
    setFieldState: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: boolean }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const {
  setStoreNameValue,
  setSloganValue,
  setDescriptionValue,
  setAllNumbersValue,
  setStoreTypeValue,
  setCategoriesValue,
  setBusinessHoursValue,
  setLocationValue,
  setBannerValue,
  setLogoValue,
} = storeFormValueSlice.actions;
export const formValueReducer = storeFormValueSlice.reducer;

export const { setFieldState } = storeFormStateSlice.actions;
export const formStateReducer = storeFormStateSlice.reducer;
