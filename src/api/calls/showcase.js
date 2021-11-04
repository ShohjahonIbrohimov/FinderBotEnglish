import axios from "axios";

const createShowcase = (data) => {
  return axios({
    url: "/telegram/category/showcase/create",
    method: "POST",
    data,
  });
};

const getShowcases = (data) => {
  return axios({
    url: "/telegram/category/showcase/all",
    method: "GET",
  });
};

const deleteShowcase = (id) => {
  return axios({
    url: `/telegram/category/showcase/delete/${id}`,
    method: "DELETE",
  });
};

export { createShowcase, getShowcases, deleteShowcase };
