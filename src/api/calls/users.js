import axios from "axios";

const getUsers = () => {
  return axios({
    url: "/telegram/users/info/all",
    method: "GET",
  });
};

const deleteUser = (id) => {
  return axios({
    url: `/telegram/users/delete/${id}`,
    method: "DELETE",
  });
};

export { getUsers, deleteUser };
