import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import financeReducer from "./finance/financeSlice";
import usersReducer from "./users/usersSlice";
import langReducer from "./lang/langSlice";

const rootReducer = combineReducers({
  authReducer,
  financeReducer,
  usersReducer,
  langReducer,
});

export default rootReducer;
