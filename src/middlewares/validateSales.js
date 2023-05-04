const { validateSaleObj } = require('../services/validations/validateSaleObj');

const validateSales = (req, res, next) => {
  const sales = req.body;
  const validatingSales = validateSaleObj(sales);

  const validate = validatingSales.every((sale) => sale === undefined);
  if (validate) {
    return next();
  }
  const errorValidation = validatingSales.find((error) => error !== undefined);
  return res.status(errorValidation.status).json({ message: errorValidation.message });
};

module.exports = { validateSales };