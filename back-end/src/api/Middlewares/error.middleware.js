const errorHandler = (err, _req, res, _next) => {
  console.log(err.name);
  switch (err.name) {
    case 'SequelizeUniqueConstraintError':
      res.status(409).json({ message: 'Conflict Error' });
      break;
    default:
      res.status(500).json({ message: err.message });
      break;
  }
};

module.exports = errorHandler;