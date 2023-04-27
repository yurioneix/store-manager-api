const { oneProductService } = require('../services');

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await oneProductService.getProductById(id);

  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = { getProductById };