import axios from "axios";

const createSaleAccountEN = (data) => {
  return axios({
    url: "en/telegram/fileproduct/create",
    method: "POST",
    data,
  });
};

const getSaleAccountsEN = (data) => {
  return axios({
    url: "/telegram/fileproduct/all",
    method: "GET",
  });
};

const deleteSaleAccountEN = (id) => {
  return axios({
    url: `/telegram/fileproduct/delete/${id}`,
    method: "DELETE",
  });
};

const createSaleAccountRU = (data) => {
  return axios({
    url: "en/telegram/fileproduct/create",
    method: "POST",
    data,
  });
};

const getSaleAccountsRU = (data) => {
  return axios({
    url: "/telegram/fileproduct/all",
    method: "GET",
  });
};

const deleteSaleAccountRU = (id) => {
  return axios({
    url: `/telegram/fileproduct/delete/${id}`,
    method: "DELETE",
  });
};

export {
  createSaleAccountEN,
  getSaleAccountsEN,
  deleteSaleAccountEN,
  createSaleAccountRU,
  getSaleAccountsRU,
  deleteSaleAccountRU,
};
