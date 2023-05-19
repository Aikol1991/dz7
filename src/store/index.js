import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import ProductsReducer from "./ProductsReducer";

export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer,
    }
})