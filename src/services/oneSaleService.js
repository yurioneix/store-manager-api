const { oneSaleModel } = require('../models');

const getSaleById = async (id) => {
  try {
    const sale = await oneSaleModel.getSaleById(id);
    if (sale.length === 0) throw new Error();
    return { type: null, message: sale };
  } catch (e) {
    return { type: 'ERROR', message: 'Sale not found' };
  }
};

module.exports = { getSaleById };
