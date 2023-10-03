const db = require("../data");
const { res_handler } = require("../utils");

module.exports = async (req, res) => {
  const planets = await db.findAll();
  res_handler(res, 200, planets);
};
