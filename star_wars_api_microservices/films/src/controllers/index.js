const { fn_handler } = require("../utils");
const { res_handler } = require("../utils");
const db = require("../data");

const getAll = async (req, res) => {
  const films = await db.list();
  res_handler(res, 200, films);
};

const getOne = async (req, res) => {
  const film = await db.findById(req.params.id);
  res_handler(res, 200, film);
};

const create = async (req, res) => {
  await db.create(req.body);
  res_handler(res, 201);
};

const update = async (req, res) => {
  await db.findByIdAndUpdate(req.params.id, req.body);
  res_handler(res, 200);
};

const remove = async (req, res) => {
  await db.findByIdAndRemove(req.params.id);
  res_handler(res, 200);
};

module.exports = {
  getAll: fn_handler(getAll),
  getOne: fn_handler(getOne),
  create: fn_handler(create),
  update: fn_handler(update),
  remove: fn_handler(remove),
};
