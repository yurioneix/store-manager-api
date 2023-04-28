const { newProductModel } = require('../models');
const nameSchema = require('./validations/validateName');

const newProduct = async (product) => {
  const { name } = product;
  // console.log('name', name);
  const error = nameSchema.validateName(name);
  // console.log('error', error);
  if (error.type) return error;

  const newProductId = await newProductModel.insert(product);

  return { type: null, message: { id: newProductId, name: product } };
};

module.exports = { newProduct };