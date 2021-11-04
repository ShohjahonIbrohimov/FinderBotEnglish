import axios from "axios";

const createInfo = (data) => {
  return axios({
    url: "https://api.g-obox.ru/offers/news/update",
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

export { createInfo, getInfos, deleteInfo };
