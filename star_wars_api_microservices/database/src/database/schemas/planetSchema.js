const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/catchError");

const planetSchema = new Schema(
  {
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [
      //{ type: String, unique: true },
      {
        type: String,
        ref: "Character",
      },
    ],
    films: [
      {
        type: String,
        ref: "Film",
      },
    ],
  },
  { timestamps: true }
);

/* --------------------------------------------------- */
/* %%%%%%%%%%%%%%%%%%%%% METHODS %%%%%%%%%%%%%%%%%%%%% */
/* --------------------------------------------------- */

planetSchema.statics.list = async function () {
  return await this.find()
    .populate("films", ["_id", "title"])
    .populate("residents", ["_id", "name"]);
};

planetSchema.statics.gett = async function (_id) {
  return await this.findById(_id)
    .populate("films", ["_id", "title"])
    .populate("residents", ["_id", "name"]);
};

planetSchema.statics.insert = async function (data) {
  const { _id } = data;
  const planet = await this.findById(_id);
  if (planet) throw new ClientError("Planet already exists", 409);
  return await this.create(data);
};

module.exports = planetSchema;
