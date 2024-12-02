export const requestTime = function (req, res, next) {
  req.requestTime = new Date().toLocaleString();
  next();
};
