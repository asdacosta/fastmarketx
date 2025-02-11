import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import createStoreFormSlice from "./slices/CreateStoreFormSlice";
import menuUiSlice from "./slices/MenuUiSlice";
import storeUiSlice from "./slices/storeUiSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    createStoreForm: createStoreFormSlice,
    menuUi: menuUiSlice,
    storeUi: storeUiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
