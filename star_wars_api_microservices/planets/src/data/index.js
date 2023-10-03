const axios = require("axios");
const planets = require("./planets.json");

//! const url_conn = "http://localhost:8004/Planet";
const url_conn = "http://database_:8004/Planet";

module.exports = {
  findAll: async () => {
    const { data } = await axios.get(url_conn);
    return data;
  },
};
