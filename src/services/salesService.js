const { salesModel } = require('../models');

const getAll = async () => {
  try {
    const sales = await salesModel.getAll();
    if (sales === undefined) throw new Error();
    return { type: null, message: sales };
  } catch (e) {
    return { type: 'ERROR', message: 'Sale not found' };
  }
};

module.exports = { getAll };
