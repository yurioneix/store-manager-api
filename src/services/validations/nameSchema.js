const Joi = require('joi');

const nameSchema = Joi.string().min(5).required()
.messages({
  'string.min': '"name" length must be at least 5 characters long',
  'any.required': '"name" is required',
});

module.exports = { nameSchema };