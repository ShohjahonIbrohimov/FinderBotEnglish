import { createSlice } from "@reduxjs/toolkit";
import { get_users_all } from "./thunks";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "usersAll",
  initialState,
  reducers: {},
  extraReducers: {
    [get_users_all.fulfilled.toString()]: (state, action) => {
      state.users = action.payload.data;
    },
  },
});

export default usersSlice.reducer;
