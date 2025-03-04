import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import {
  formStateReducer,
  formValueReducer,
} from "./slices/CreateStoreFormSlice";
import menuUiSlice from "./slices/MenuUiSlice";
import storeUiSlice from "./slices/storeUiSlice";
import updateStoreSlice from "./slices/updateStoreSlice";
import itemDetailSlice from "./slices/itemDetailSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    storeFormValue: formValueReducer,
    storeFormState: formStateReducer,
    menuUi: menuUiSlice,
    storeUi: storeUiSlice,
    updateStore: updateStoreSlice,
    itemDetail: itemDetailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
