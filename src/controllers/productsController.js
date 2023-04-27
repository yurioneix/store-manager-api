const { productsServices } = require('../services');

const listProducts = async (_req, res) => {
  const { type, message } = await productsServices.findAll();

  if (type) return res.status(404).json(message);
  res.status(200).json(message);
};

module.exports = { listProducts };