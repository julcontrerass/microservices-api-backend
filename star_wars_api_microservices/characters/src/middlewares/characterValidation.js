const { ClientError } = require("../utils/errors");
module.exports = (req, res, next) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  } = req.body;

  // Verificar si los campos requeridos están presentes y no son nulos o cadenas vacías
  if (
    !name ||
    !height ||
    !mass ||
    !hair_color ||
    !skin_color ||
    !eye_color ||
    !birth_year ||
    !gender ||
    !homeworld
  ) {
    throw new ClientError("All fields are required", 400);
  }

  // Verificar que homeworld sea un objeto con las propiedades _id y name
  if (
    !homeworld ||
    typeof homeworld !== "object" ||
    !homeworld._id ||
    !homeworld.name
  ) {
    throw new ClientError(
      "Homeworld must be an object with _id and name properties",
      400
    );
  }

  // Verificar que films sea un arreglo de objetos con las propiedades _id y title
  const { films } = req.body;
  if (!films || !Array.isArray(films) || films.length === 0) {
    throw new ClientError("Films must be a non-empty array", 400);
  }

  for (const film of films) {
    if (!film || typeof film !== "object" || !film._id || !film.title) {
      throw new ClientError(
        "Each film in the films array must be an object with _id and title properties",
        400
      );
    }
  }

  // Si todos los campos pasan la validación, continuamos con la siguiente middleware o ruta
  return next();
};
