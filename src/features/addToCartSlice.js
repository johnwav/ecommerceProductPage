import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addToCartSlice = createSlice({
  name: "addtoCart",
  initialState,
  reducers: {
    add: (state) => {
        state.value = {}
    },
  },
});
