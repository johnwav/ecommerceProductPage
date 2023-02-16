import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const productViewSlice = createSlice({
    name: 'productView',
    initialState,
    reducers: {
      toggle: (state) => {
         state.value = !state.value;
      },
    },
  });
 
  export const { toggle } =
  productViewSlice.actions;

export default productViewSlice.reducer;
