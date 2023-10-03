const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/catchError");

const filmSchema = new Schema(
  {
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [
      {
        type: String,
        ref: "Character",
      },
    ],
    planets: [
      {
        type: String,
        ref: "Planet",
      },
    ],
  },
  { timestamps: true }
);

/* --------------------------------------------------- */
/* %%%%%%%%%%%%%%%%%%%%% METHODS %%%%%%%%%%%%%%%%%%%%% */
/* --------------------------------------------------- */

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.gett = async function (_id) {
  return await this.findById(_id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.insert = async function (data) {
  const { _id } = data;
  const film = await this.findById(_id);
  if (film) throw new ClientError("Film already exists", 409);
  return await this.create(data);
};

module.exports = filmSchema;
