module.exports = (res, code, data, message) => {
  const message_ = message ? message : "OK";
  res.status(code).json({
    error: false,
    message: "Character Service: " + message_,
    data,
  });
};
