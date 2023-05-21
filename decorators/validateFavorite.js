const { HttpError } = require("../helpers");

const validateFavorite = (schema) => {
  const func = (req, res, next) => {
    const { body } = req;
    const { error } = schema.validate(body);
    if (error) {
      if (Object.keys(body).length === 0) {
        throw HttpError(400, "missing field favorite");
      }
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateFavorite;
