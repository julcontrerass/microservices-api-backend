const axios = require("axios");

//! const url_conn = "http://localhost:8004/Character";
const url_conn = "http://database_:8004/Character";

module.exports = {
  list: async () => {
    const { data } = await axios.get(url_conn);
    return data;
  },
  getOne: async (id) => {
    const { data } = await axios.get(`${url_conn}/${id}`);
    return data;
  },
  create: async (character) => {
    const { data } = await axios.post(
      url_conn,
      character
    );
    return data;
  },
  removexd: async (id) => {
    const { data } = await axios.delete(
      `${url_conn}/${id}`
    );
    return data;
  },
  updatexd: async (id, character) => {
    const { data } = await axios.put(
      `${url_conn}/${id}`,
      character
    );
    return data;
  },
};
