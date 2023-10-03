const { fn_handler } = require("../utils");

module.exports = {
  getCharacters: fn_handler(require("./getCharacters")),
  getCharacter: fn_handler(require("./getCharacter.js")),
  createCharacter: fn_handler(require("./createCharacter")),
  deleteCharacter: fn_handler(require("./deleteCharacter.js")),
  updateCharacter: fn_handler(require("./updateCharacter.js")),
};
