const { ClientError } = require("../utils/catchError");

function validateModelParam(req, res, next) {
  const { model } = req.params;
  if (["Characterx", "Film", "Planet"].includes(model)) {
    next();
  } else {
    throw new ClientError("DB Service: Model not found", 404);
  }
}

module.exports = {
  validateModelParam,
};
