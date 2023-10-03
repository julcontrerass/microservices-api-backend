const data = require("../data");
const { res_handler } = require("../utils");

module.exports = async (req, res) => {
  const characters = await data.list();
  res_handler(res, 200, characters);
};
