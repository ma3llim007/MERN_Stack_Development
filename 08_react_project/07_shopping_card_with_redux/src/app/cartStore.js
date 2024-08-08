import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

export const cartStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});