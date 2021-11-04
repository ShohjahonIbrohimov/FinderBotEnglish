import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../api/api_calls";

// GET USERS
const getUsersAsync = async (_, { rejectWithValue }) => {
  try {
    const res = await getUsers();
    return res;
  } catch (err) {
    return rejectWithValue([], err);
  }
};

export const get_users_all = createAsyncThunk(
  "/users/all",
  getUsersAsync
);
