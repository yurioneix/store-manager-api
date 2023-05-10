const { updateProductModel } = require('../models');
const idSchema = require('./validations/validateId');
const nameSchema = require('./validations/validateName');

const update = async (name, id) => {
  try {
    const errorName = nameSchema.validateName(name);
    const errorID = idSchema.validateId(id);

    if (errorName.type) return errorName;
    if (errorID.type) return errorID;

    const updateProduct = await updateProductModel.update(name, id);
    if (updateProduct === 0) throw new Error();
    return { type: null, message: { name, id } };
  } catch (e) {
    return { type: 'ERROR', message: 'Product not found' };
  }
};

module.exports = { update };