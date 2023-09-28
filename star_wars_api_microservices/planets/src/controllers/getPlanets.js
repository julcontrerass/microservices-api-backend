const planet = require("../data");

module.exports = async (req, res) => {
  const planets = await planet.list();
  res.status(200).json(planets);
};
