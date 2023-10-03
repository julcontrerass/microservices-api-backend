const { ClientError } = require("../utils/errors");

exports.filmsValidationMdlw = (req, res, next) => {
  const {
    id,
    title,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
  } = req.body;
  if (
    !id ||
    !title ||
    !opening_crawl ||
    !director ||
    !producer ||
    !release_date ||
    !characters ||
    !planets
  ) {
    throw new ClientError("Missing required fields", 400);
  }
  if (typeof id !== "string") {
    throw new ClientError("Id must be a string", 400);
  }
  if (typeof title !== "string") {
    throw new ClientError("Title must be a string", 400);
  }
  if (typeof opening_crawl !== "string") {
    throw new ClientError("Opening crawl must be a string", 400);
  }
  if (typeof director !== "string") {
    throw new ClientError("Director must be a string", 400);
  }
  if (typeof producer !== "string") {
    throw new ClientError("Producer must be a string", 400);
  }
  if (typeof release_date !== "string") {
    throw new ClientError("Release date must be a string", 400);
  }
  if (!Array.isArray(characters)) {
    throw new ClientError("Characters must be an array", 400);
  }
  if (!Array.isArray(planets)) {
    throw new ClientError("Planets must be an array", 400);
  }
  next();
};

const body_test = {
  id: "77777777777777",
  title: "A New Hope",
  opening_crawl: "Civil war. Rebel spaceships, striking from a hidden base....",
  director: "Nicolas Lucas",
  producer: "Rick Martin",
  release_date: "2012-06-22",
  characters: ["9", "10", "12"],
  planets: ["22", "11"],
};
