const { createSaleModel } = require('../models');

const createSale = async (sales) => {
  const saleId = await createSaleModel.createSale();

  const createSaleProducts = await Promise.all(sales.map(
    (sale) => createSaleModel.createSaleProducts(saleId, sale.productId, sale.quantity),
  ));

  console.log('createSaleProducts', createSaleProducts);

  return {
    status: 201,
    message: {
      id: saleId,
      itemsSold: sales,
    },
  };
};

module.exports = { createSale };