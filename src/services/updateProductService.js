const { updateProductModel } = require('../models');

const update = async (name, id) => {
  try {
    const updateProduct = await updateProductModel.update(name, id);
    if (updateProduct === 0) throw new Error();
    return { type: null, message: { name, id } };
  } catch (e) {
    return { type: 'ERROR', message: 'Product not found' };
  }
};

module.exports = { update };