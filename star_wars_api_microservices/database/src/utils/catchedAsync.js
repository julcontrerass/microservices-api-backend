module.exports = function catchedAsync(fn) {
  return (req, res, next) => {
    fn(req, res).catch((err) => {
      next(err);
    });
  };
};
