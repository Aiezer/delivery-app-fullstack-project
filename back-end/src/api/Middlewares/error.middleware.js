const errorHandler = (err, _req, res) => {
  if (err.parsedOriginalUrl.pathname === '/favicon.ico') {
  switch (err.name) {
    case 'SequelizeUniqueConstraintError':
      res.status(409).json({ message: 'Conflict Error' });
      break;
    default:
      res.status(500).json({ message: err.message });
      break;
  }
}
};

module.exports = errorHandler;