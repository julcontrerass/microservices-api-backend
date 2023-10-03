const axios = require("axios");
const { ClientError } = require("../utils/errors");
const films = require("./films.json");

//! const url_conn = "http://localhost:8004/Film";
const url_conn = "http://database_:8004/Film";

// DB simulation
const list = async () => {
  const { data } = await axios.get(url_conn);
  return data;
};

const create = async (film) => {
  const index = films.findIndex((f) => f.id === film.id);
  if (index !== -1) {
    throw new ClientError("Film already exists", 400);
  }
  films.push(film);
};

const findById = async (id) => {
  const film = films.find((film) => film.id === id);
  if (!film) {
    throw new ClientError("Film not found", 404);
  }
  return film;
};

const findByIdAndRemove = async (id) => {
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    throw new ClientError("Film not found", 404);
  }
  films.splice(index, 1);
};

const findByIdAndUpdate = async (id, body) => {
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    throw new ClientError("Film not found", 404);
  }
  films[index] = { ...films[index], ...body };
};

module.exports = {
  list,
  create,
  findById,
  findByIdAndRemove,
  findByIdAndUpdate,
};
