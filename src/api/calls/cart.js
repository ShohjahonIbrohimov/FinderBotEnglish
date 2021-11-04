import axios from "axios";

const createCart = (data) => {
  return axios({
    url: "/telegram/shop/cart/create",
    method: "POST",
    data,
  });
};

const getCarts = (data) => {
  return axios({
    url: "/telegram/shop/cart/all",
    method: "GET",
  });
};

const deleteCart = (id) => {
  return axios({
    url: `/telegram/cart/delete/${id}`,
    method: "DELETE",
  });
};

export { createCart, getCarts, deleteCart };
