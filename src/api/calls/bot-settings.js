import axios from "axios";

const checkToken = (token) => {
  return axios({
    url: `/telegram/bot/check/bot${token}`,
    method: "GET",
  });
};

const createBot = (data) => {
  return axios({
    url: "/telegram/bot/create",
    method: "POST",
    data,
  });
};

const getBots = (data) => {
  return axios({
    url: "/telegram/bot/all",
    method: "GET",
    data,
  });
};

const deleteBot = (id) => {
  return axios({
    url: `/telegram/bot/delete/${id}`,
    method: "DELETE",
  });
};

export { checkToken, createBot, deleteBot, getBots };
