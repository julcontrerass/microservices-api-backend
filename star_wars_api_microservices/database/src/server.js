const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(routes);

app.use("*", (req, res) => {
  res.status(404).json({
    error: true,
    message: "Database Service: Route not found",
  });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: true,
    message: "Database Service: " + err.message,
  });
});

module.exports = app;
