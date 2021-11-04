import axios from "axios";

const createProductEN = (data) => {
  return axios({
    url: "en/telegram/product/create",
    method: "POST",
    data,
  });
};

const getProductsEN = (data) => {
  return axios({
    url: "en/telegram/product/all",
    method: "GET",
  });
};

const deleteProductEN = (id) => {
  return axios({
    url: `en/telegram/product/delete/${id}`,
    method: "DELETE",
  });
};

const createProductRU = (data) => {
  return axios({
    url: "ru/telegram/product/create",
    method: "POST",
    data,
  });
};

const getProductsRU = (data) => {
  return axios({
    url: "ru/telegram/product/all",
    method: "GET",
  });
};

const deleteProductRU = (id) => {
  return axios({
    url: `ru/telegram/product/delete/${id}`,
    method: "DELETE",
  });
};

export {
  createProductEN,
  getProductsEN,
  deleteProductEN,
  createProductRU,
  getProductsRU,
  deleteProductRU,
};
