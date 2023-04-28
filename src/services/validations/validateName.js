const { nameSchema } = require('./nameSchema');

const validateName = (name) => {
  const { error } = nameSchema.validate(name);
  console.log(error);
  if (error.details[0].type === 'any.required') {
    return {
        type: error.details[0].type, message: error.details[0].message,
      }; 
  }
  if (error.details[0].type === 'string.min') {
    return {
        type: error.details[0].type, message: error.details[0].message,
      }; 
  }
  return { type: null, message: '' };
};

module.exports = { validateName };