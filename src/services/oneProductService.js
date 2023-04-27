const { oneProductModel } = require('../models');
const schema = require('./validations/validateId');

const getProductById = async (id) => {
  try {
    const error = schema.validateId(id);
    if (error.type) return error;
  
    const product = await oneProductModel.getProductById(id);
    if (product === undefined) throw new Error();
    return { type: null, message: product };
  } catch (e) {
    return { type: 'ERROR', message: 'Product not found' };
  }
};

module.exports = { getProductById };
