import axios from "axios";

const getSms = () => {
  return axios({
    url: "/telegram/sms/all",
    method: "GET",
  });
};

const deleteSms = (id) => {
  return axios({
    url: `/telegram/sms/delete/${id}`,
    method: "DELETE",
  });
};

export { getSms, deleteSms };
