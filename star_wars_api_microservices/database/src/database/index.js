const { MONGO_URI } = require("../config/enviroments");
const mongoose = require("mongoose");

const conn = mongoose.createConnection(MONGO_URI);

const Character = conn.model("Character", require("./schemas/characterSchema"));
const Film = conn.model("Film", require("./schemas/filmSchema"));
const Planet = conn.model("Planet", require("./schemas/planetSchema"));

module.exports = {
  Characterx: Character,
  Film,
  Planet,
};
