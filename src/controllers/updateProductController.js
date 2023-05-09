const { updateProductService } = require('../services');

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await updateProductService.update(name, id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

module.exports = { updateProduct };