import { configureStore } from "@reduxjs/toolkit";
import itemsInCartReducer from "../features/itemsInCart/itemsInCartSlice";
import productView from "../features/productViewSlice";



export const store = configureStore({
  reducer: {
    itemsInCart: itemsInCartReducer,
    productView: productView },
});
