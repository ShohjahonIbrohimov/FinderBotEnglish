import axios from "axios";

const createState = (data) => {
  return axios({
    url: "/telegram/states/create",
    method: "POST",
    data,
  });
};

const getStates = (data) => {
  return axios({
    url: "/telegram/states/all",
    method: "GET",
  });
};

const deleteState = (id) => {
  return axios({
    url: `/telegram/states/delete/${id}`,
    method: "DELETE",
  });
};

export { createState, getStates, deleteState };
