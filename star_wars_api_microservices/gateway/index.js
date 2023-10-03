const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));

app.use(
  "/characters",
  createProxyMiddleware({
    // target: "http://localhost:3001",
    target: "http://characters_:3001",
    changeOrigin: true,
    // onProxyReq: (proxyReq, req, res) => {
    //   console.log("Proxying request to characters");
    // }
  })
);

app.use(
  "/films",
  //! createProxyMiddleware({ target: "http://localhost:3002", changeOrigin: true })
  createProxyMiddleware({ target: "http://films_:3002", changeOrigin: true })
);

app.use(
  "/planets",
  //! createProxyMiddleware({ target: "http://localhost:3003", changeOrigin: true })
  createProxyMiddleware({ target: "http://planets_:3003", changeOrigin: true })
);

app.use("*", (req, res) => {
  res.status(404).json({
    error: true,
    message: " Gateway: Route not found",
  });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: true,
    message: "Gateway: " + err.message,
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
