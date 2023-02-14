import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const itemsAddedToCartSlice = createSlice({
    name: 'itemsAddedToCart',
    initialState,
    reducers: {
      increment: (state) => {
         state.value += 1;
      },
    },
  });
 
  export const { increment } =
  itemsAddedToCartSlice.actions;

export default itemsAddedToCartSlice.reducer;
