const { productsModels } = require('../models');

const findAll = async () => {
  const products = await productsModels.findAll();
  return { type: null, message: products };
};

module.exports = { findAll };