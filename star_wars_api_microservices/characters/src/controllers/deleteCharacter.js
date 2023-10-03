const data = require("../data");
const { res_handler } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const character = await data.removexd(id);
  res_handler(res, 200, character);
};
