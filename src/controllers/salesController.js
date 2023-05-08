const { salesService } = require('../services');

const listSales = async (_req, res) => {
  const { type, message } = await salesService.getAll();

  if (type) return res.status(404).json(message);
  res.status(200).json(message);
};

module.exports = { listSales };
