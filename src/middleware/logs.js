const logRequest = (req, res, next) => {
  console.log(`date : ${new Date()} - method& : ${req.method}  path : ${req.url}`);
  next();
};

module.exports = logRequest;