const { oneProductModel } = require('../models');
const schema = require('./validations/validateId');

const getProductById = async (id) => {
    const error = schema.validateId(id);
  if (error.type) return error;
  
    const product = await oneProductModel.getProductById(id);
    if (product === undefined) return { type: 'ERROR', message: 'ID_NOT_FOUND' };
    return { type: null, message: product };
  // } catch (e) {
  //   return { type: 'ERROR', message: 'ID_NOT_FOUND' };
  // }
};

module.exports = { getProductById };
