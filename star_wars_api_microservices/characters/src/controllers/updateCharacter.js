const data = require("../data");
const { res_handler } = require("../utils");

module.exports = async (req, res) => {
  const character = await data.updatexd(req.params.id, req.body);
  res_handler(res, 200, character);
};
