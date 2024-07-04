import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const findIndex = state.cart.find((val) => {
        return val.product === action.payload.product;
      });
      if (!findIndex) {
        state.cart.push(action.payload);
      } else {
        alert("product already exist");
      }
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id != action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, removeProduct ,serachProduct} = cartReducer.actions;

export default cartReducer.reducer;
