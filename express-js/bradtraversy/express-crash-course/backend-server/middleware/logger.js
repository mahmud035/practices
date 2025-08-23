export const logger = function (req, res, next) {
  console.log(`${req.method} ${req.originalUrl} `);
  next();
};
