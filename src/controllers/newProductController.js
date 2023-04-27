const { newProductService } = require('../services');

const newProduct = async (req, res) => {
  const product = req.body;

  const { message } = await newProductService.newProduct(product);

  return res.status(201).json(message);
};

module.exports = { newProduct };