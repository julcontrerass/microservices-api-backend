const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index.js");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use("/films", router);

server.use("*", (req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});

server.use((err, req, res, next) => {
  //! console.error(err);
  res.status(err.statusCode || 500).json({
    error: true,
    message: err.message,
  });
});

module.exports = server;
