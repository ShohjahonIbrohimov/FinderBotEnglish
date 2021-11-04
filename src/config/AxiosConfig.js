import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AxiosConfig = ({ children }) => {
  const token = useSelector((state) => state.authReducer.token);
  const baseurl = "https://api.g-obox.ru/api/";
  // AXIOS DEFAULTS
  axios.defaults.headers.common["x-access-token"] = token;
  axios.defaults.baseURL = baseurl;

  return <>{children}</>;
};

export default AxiosConfig;
