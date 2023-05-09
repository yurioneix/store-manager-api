const { updateProductModel } = require('../models');
const idSchema = require('./validations/validateId');
const nameSchema = require('./validations/validateName');

const update = async (name, id) => {
  try {
    const errorID = idSchema.validateId(id);
    const errorName = nameSchema.validateName(name);

    if (errorID.type) return errorID;
    if (errorName.type) return errorName;

    const updateProduct = await updateProductModel.update(name, id);
    if (updateProduct === 0) throw new Error();
    return { type: null, message: { name, id } };
  } catch (e) {
    return { type: 'ERROR', message: 'Product not found' };
  }
};

module.exports = { update };