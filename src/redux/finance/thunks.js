import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFinanceAll } from "../../api/api_calls";

// GET FINANCE
const getFinanceAsync = async (_, { rejectWithValue }) => {
  try {
    const res = await getFinanceAll();
    return res;
  } catch (err) {
    return rejectWithValue([], err);
  }
};

export const get_finance_all = createAsyncThunk(
  "finance/get_finance_all",
  getFinanceAsync
);
