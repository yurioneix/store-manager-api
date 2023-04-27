const { allProductsModels } = require('../models');

const findAll = async () => {
  try {
    const products = await allProductsModels.findAll();
    if (products === undefined) throw new Error();
    return ({ type: null, message: products });
  } catch (e) {
    return { type: 'ERROR', message: 'PRODUCT_NOT_FOUND' };
  }
};

module.exports = { findAll };