const validateSaleObj = (sales) => {
  const validate = sales.map((sale) => {
    if (sale.productId === undefined) {
      return { status: 400, message: '"productId" is required' };
    }
    if (sale.quantity === undefined) {
      return { status: 400, message: '"quantity" is required' };
    }
    if (sale.quantity < 1) {
      return { status: 422, message: '"quantity" must be greater than or equal to 1' };
    }
    return undefined;
  });
  return validate;
};

module.exports = { validateSaleObj };
