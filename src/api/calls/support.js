import axios from "axios";

const createSupport = (data) => {
  return axios({
    url: "/telegram/support/create",
    method: "POST",
    data,
  });
};

const getSupports = (data) => {
  return axios({
    url: "/telegram/support/all",
    method: "GET",
  });
};

const deleteSupport = (id) => {
  return axios({
    url: `/telegram/support/${id}`,
    method: "DELETE",
  });
};

export { createSupport, getSupports, deleteSupport };
