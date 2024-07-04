import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      (state.user = action.payload), (state.isAuthenticated = true);
    },
    removeUser: (state, action) => {
      (state.user = null), (state.isAuthenticated = false);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addUser,removeUser } = userReducer.actions;

export default userReducer.reducer;
