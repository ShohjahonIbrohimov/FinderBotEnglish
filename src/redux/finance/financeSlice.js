import { createSlice } from "@reduxjs/toolkit";
import { get_finance_all } from "./thunks";

const initialState = {
  finance: [],
};

export const financeSlice = createSlice({
  name: "financeAll",
  initialState,
  reducers: {},
  extraReducers: {
    [get_finance_all.fulfilled.toString()]: (state, action) => {
      state.finance = action.payload.data;
    },
  },
});

export default financeSlice.reducer;
