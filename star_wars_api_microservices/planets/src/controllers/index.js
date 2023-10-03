const { fn_handler } = require("../utils");

module.exports = {
  getPlanets: fn_handler(require("./getPlanets.js")),
};
