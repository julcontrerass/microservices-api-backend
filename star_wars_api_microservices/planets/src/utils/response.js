module.exports = (res, code, data) => {
  res.status(code).json({
    error: false,
    data,
  });
};
