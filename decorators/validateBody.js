const { HttpError } = require("../helpers");


const validateBody = schema => {
    const func = (req, res, next) => {
         const { body } = req;
         const { error } = schema.validate(body);
         if (error) {
           next(HttpError(400, error.message));
        }
        next()
    }
    return func;
}

module.exports = validateBody