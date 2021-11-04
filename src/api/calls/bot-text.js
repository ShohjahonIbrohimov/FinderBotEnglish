import axios from "axios";

const createBotText = (data) => {
  return axios({
    url: "https://api.g-obox.ru/offers/user/update",
    method: "POST",
    data,
  });
};

const getInfos = (data) => {
  return axios({
    url: "https://api.g-obox.ru/offers/news/all",
    method: "GET",
  });
};

const deleteInfo = (id) => {
  return axios({
    url: `https://api.g-obox.ru/offers/news/delete/${id}`,
    method: "DELETE",
  });
};

export { createBotText, getInfos, deleteInfo };
