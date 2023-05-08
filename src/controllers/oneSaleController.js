const { oneSaleService } = require('../services');

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await oneSaleService.getSaleById(id);

  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = { getSaleById };
