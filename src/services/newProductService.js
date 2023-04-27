const { newProductModel } = require('../models');

const newProduct = async (product) => {
  const { name } = product;
  const newProductId = await newProductModel.insert(product);

  return { type: null, message: { id: newProductId, name } };
};

module.exports = { newProduct };