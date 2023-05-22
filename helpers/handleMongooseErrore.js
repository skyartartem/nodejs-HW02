const handleMongooseErrore = (error, data, next) => {
  error.sttus = 400;
  next();
};

module.exports = handleMongooseErrore;