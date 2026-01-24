import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
import toastReducer from "./toastSlice";

export const store = configureStore( {
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        toast: toastReducer,
    },
} );
