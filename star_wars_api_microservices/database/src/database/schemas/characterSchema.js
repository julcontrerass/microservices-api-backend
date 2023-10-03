const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/catchError");

// _id: Shema.Types.ObjectId,
const characterSchema = new Schema(
  {
    _id: {
      type: String,
      default: function () {
        // Genera la fecha actual en formato de cadena
        return new Date().toISOString();
      },
    },
    name: {
      type: String,
      required: true,
      trim: true, // Elimina espacios en blanco al principio y al final
      maxlength: 100, // Define una longitud máxima para el nombre
    },
    height: {
      type: String,
      validate: {
        validator: (value) => !isNaN(value), // Valida que sea un número
        message: "Height must be a valid number.",
      },
    },
    mass: {
      type: String,
      validate: {
        validator: (value) => !isNaN(value), // Valida que sea un número
        message: "Mass must be a valid number.",
      },
    },
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: {
      type: String,
      validate: {
        validator: (value) => /^[0-9]{4}$/.test(value), // Valida un formato de año específico (4 dígitos)
        message: "Birth year must be a valid 4-digit year.",
      },
    },
    gender: {
      type: String,
      enum: ["male", "female", "unknown"], // Define valores permitidos
    },
    homeworld: { type: String, ref: "Planet" },
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

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("films", ["_id", "title"])
    .populate("homeworld", ["_id", "name"]);
};

characterSchema.statics.gett = async function (_id) {
  // return await this.findOne({ _id }) //* SUCCESFUL
  return this.findById(_id) //* SUCCESFUL
    .populate("films", ["_id", "title"])
    .populate("homeworld", ["_id", "name"]);
};

characterSchema.statics.insert = async function (data) {
  const { _id } = data;
  const character = await this.findOne({ _id });
  if (character) {
    throw new ClientError("Character already exists", 409);
  }
  return await this.create(data);
};

characterSchema.statics.removee = async function (_id) {
  // return await this.deleteOne({ _id });
  const response = await this.findByIdAndDelete(_id);
  if (!response) {
    throw new ClientError("Character not found", 404);
  }
  return response;
};

characterSchema.statics.updatee = async function (_id, data) {
  const response = await this.findByIdAndUpdate(_id, data, {
    new: true, // Devuelve el documento modificado
    runValidators: true, // Ejecuta las validaciones del esquema
  });
  if (!response) {
    throw new ClientError("Character not found", 404);
  }
  return response;
};

module.exports = characterSchema;
