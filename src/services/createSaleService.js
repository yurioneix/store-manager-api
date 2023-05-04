const { createSaleModel } = require('../models');

const createSale = async (sales) => {
  const saleId = await createSaleModel.createSale();

  return {
    status: 201,
    message: {
      id: saleId,
      itemsSold: sales,
    },
  };
};

module.exports = { createSale };