const { allProductsModels } = require('../models');

const validateExistingProductId = async (req, res, next) => {
  const sales = req.body;
  const products = await allProductsModels.findAll();

  const productsID = products.map((product) => product.id);
  const salesID = sales.map((sale) => sale.productId);
  const checkExistingProductId = salesID.every((sale) => productsID.includes(sale));

  if (!checkExistingProductId) return res.status(404).json({ message: 'Product not found' });

  return next();
};
module.exports = { validateExistingProductId };
