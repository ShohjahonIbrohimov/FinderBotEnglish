import { createSlice } from "@reduxjs/toolkit";
import { signup, login, update, authMe } from "./thunks";

// Define the initial state using that type
const initialState = {
  user: null,
  token: null,
  authenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.authenticated = false;
    },
  },
  extraReducers: {
    [authMe.fulfilled.toString()]: (state, action) => {
      state.authenticated = true;
    },
    [authMe.rejected.toString()]: (state, action) => {
      state.authenticated = false;
    },
    [signup.fulfilled.toString()]: (state, action) => {
      console.log(action.payload.data.data.token);
      state.token = action.payload.data.data.token;
    },
    [login.fulfilled.toString()]: (state, action) => {
      const data = action.payload?.data;
      state.authenticated = true;
      // state.user = data?.data.profile;
      state.token = data?.accessToken;
    },
    [update.fulfilled.toString()]: (state, action) => {
      const data = action.payload?.data;
      state.user = data?.profile;
      state.token = data?.token;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
