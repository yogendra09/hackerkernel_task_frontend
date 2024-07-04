import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeProduct:(state,action)=> {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProductToCart,removeProduct } = cartReducer.actions

export default cartReducer.reducer