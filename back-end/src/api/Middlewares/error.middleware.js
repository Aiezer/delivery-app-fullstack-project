const errorHandler = (err, req, res) => {
  console.log(err.name);
  switch (err.name) {
    case 'SequelizeUniqueConstraintError':
      res.status(409).json({ message: 'Email já cadastrado' });
      break;
    default:
      res.status(500).json({ message: err.message });
      break;
  }
};

module.exports = errorHandler;