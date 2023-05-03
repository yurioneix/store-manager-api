const { createSaleModel } = require('../models');

const createSale = async (sales) => {
  const saleId = await createSaleModel.createSale();

  return { id: saleId, itemsSold: sales };
};

module.exports = { createSale };