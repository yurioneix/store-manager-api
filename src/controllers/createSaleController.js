const { createSaleService } = require('../services');

const createSale = async (req, res) => {
  const sales = req.body;

  const { status, message } = await createSaleService.createSale(sales);

  return res.status(status).json(message);
};

module.exports = { createSale };