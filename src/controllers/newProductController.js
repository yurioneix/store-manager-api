const { newProductService } = require('../services');

const newProduct = async (req, res) => {
  const product = req.body;

  const { type, message } = await newProductService.newProduct(product);
  // console.log('type', type, 'message', message);

  if (type === 'any.required') return res.status(400).json({ message });
  if (type === 'string.min') return res.status(422).json({ message });

  return res.status(201).json(message);
};

module.exports = { newProduct };