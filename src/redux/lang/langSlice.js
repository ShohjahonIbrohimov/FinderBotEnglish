import { createSlice } from "@reduxjs/toolkit";
import { get_finance_all } from "./thunks";

const initialState = {
  language: "ru",
};

export const langSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      state.language = action.payload;
    },
  },
  extraReducers: {},
});

export const { changeLang } = langSlice.actions;

export default langSlice.reducer;
