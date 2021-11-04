import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// SIGN UP
const signupAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "https://app.borzhunter.com/api/v1/register",
      method: "POST",
      data,
      headers: {},
    });
    toast.success("Пользователь создан");

    return res;
  } catch (err) {
    if (err.response.data.email === data.email) {
      toast.error("Пользователь с таким именим уже существует");
    }
    return rejectWithValue([], err);
  }
};

export const signup = createAsyncThunk("register", signupAsync);

// LOGIN
const loginAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "/auth/signin",
      method: "POST",
      data: data,
    });
    return res;
  } catch (err) {
    toast.error("Не правилный Login или/и Password");
    return rejectWithValue([], err);
  }
};
export const login = createAsyncThunk("login", loginAsync);

const updateAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "auth/signin",
      method: "POST",
      data,
    });
    return res;
  } catch (err) {
    console.log(err);
    // Handle Error Here
    return rejectWithValue([], err);
  }
};

export const update = createAsyncThunk("auth/cabinet", updateAsync);

const authMeAsync = async (data, { rejectWithValue }) => {
  try {
    const res = await axios({
      url: "auth/me",
      method: "GET",
    });
    return res;
  } catch (err) {
    return rejectWithValue([], err);
  }
};
export const authMe = createAsyncThunk("user/me", authMeAsync);
