import axios from "axios";
import api_urls from "./api_urls";

// OFFERS START
const getOffers = () => {
  return axios({
    url: api_urls.get_offers,
    method: "GET",
  });
};

const postOffer = (data) => {
  return axios({
    url: api_urls.post_offer,
    method: "POST",
    data,
  });
};

const getOffersAll = () => {
  return axios({
    url: api_urls.get_offers_all,
    method: "GET",
  });
};

const getOffersFilter = () => {
  return axios({
    url: api_urls.get_offers_filter,
    method: "POST",
  });
};

// OFFERS END

// UPLOAD START
const uploadImage = (data) => {
  return axios({
    url: api_urls.upload_image,
    method: "POST",
    data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
// UPLOAD END

const getManagers = () => {
  return axios({
    url: api_urls.get_managers,
    method: "GET",
  });
};

const getUsers = () => {
  return axios({
    url: api_urls.get_users,
    method: "GET",
  });
};

// user update

const updateUser = (id, data) => {
  return axios({
    url: `${api_urls.update_user}${id}`,
    method: "POST",
    data,
  });
};

// NEWS START
const getNews = () => {
  return axios({
    url: api_urls.get_news,
    method: "GET",
  });
};
// NEWS END

// FINANCE START
const getFinanceAll = () => {
  return axios({
    url: api_urls.get_finance_all,
    method: "GET",
  });
};

const updateFinance = () => {
  return axios({
    url: api_urls.update_finance,
    method: "GET",
  });
};
// FINANCE END

// DOMAINS START
const getDomains = (user_id) => {
  return axios({
    url: `${api_urls.get_domains}?user_id=${user_id}`,
    method: "GET",
  });
};

const createDomain = (data) => {
  return axios({
    url: api_urls.create_domain,
    method: "POST",
    data,
  });
};

const deleteDomain = (id) => {
  return axios({
    url: `${api_urls.delete_domain}?id=${id}`,
    method: "DELETE",
  });
};
// DOMAINS END

// OFFER SETTINGS
const getDirectionList = () => {
  return axios({
    url: api_urls.get_direction_list,
    method: "GET",
  });
};

const getRegions = () => {
  return axios({
    url: api_urls.get_region_list,
  });
};

// STREAMS START
const createStream = (data) => {
  return axios({
    url: api_urls.create_stream,
    method: "POST",
    data,
  });
};

// NEWS
const postNews = (data) => {
  return axios({
    url: api_urls.post_news,
    method: "POST",
    data,
  });
};

// CREATIVES
const create_creative = (data) => {
  return axios({
    url: api_urls.create_creative,
    method: "POST",
    data,
  });
};

export {
  // OFFERS
  getOffers,
  postOffer,
  getOffersAll,
  getOffersFilter,
  // OFFERS END
  // UPLOAD START
  uploadImage,
  // UPLOAD END
  updateUser,
  getUsers,
  getManagers,
  getNews,
  // getFinance,
  getDomains,
  createDomain,
  deleteDomain,
  getDirectionList,
  getRegions,
  // getStreamData,
  createStream,
  create_creative,
  // deleteStream,
  // getRequests,
  // updateStream,
  // getStatistics,
  // getScenarios,
  // getInstruments,
  getFinanceAll,
  postNews,
  updateFinance,
};
