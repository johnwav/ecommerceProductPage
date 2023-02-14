import { configureStore } from "@reduxjs/toolkit";
import itemsInCartReducer from "../features/itemsInCart/itemsInCartSlice";
import itemsAddedToCartReducer from "../features/itemsInCart/itemsAddedToCart";

export const store = configureStore({
  reducer: {
    itemsInCart: itemsInCartReducer,
    itemsAddedToCart: itemsAddedToCartReducer,
  },
});
