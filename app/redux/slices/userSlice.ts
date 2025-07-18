import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  authenticated: boolean;
}

const initialState: UserState = {
  id: null,
  name: null,
  email: null,
  phone: null,
  authenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        email?: string;
        phone?: string;
      }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email ?? null;
      state.phone = action.payload.phone ?? null;
      state.authenticated = true;
    },
    logout: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
      state.phone = null;
      state.authenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
