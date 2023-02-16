import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const itemsInCartSlice = createSlice({
  name: 'itemsInCart',
  initialState,
  reducers: {
    increment: (state) => {
       state.value += 1;
    },

    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },

    incrementByAmout: (state, action) => {
      state.value += action.payload;
    },

    
  },
});

export const { increment, decrement, incrementByAmout } =
  itemsInCartSlice.actions;

export default itemsInCartSlice.reducer;
