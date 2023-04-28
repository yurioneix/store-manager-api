const { nameSchema } = require('./nameSchema');

const validateName = (name) => {
  const { error } = nameSchema.validate(name);
  if (error === undefined) return { type: null, message: '' };
  
  return {
        type: error.details[0].type, message: error.details[0].message,
      }; 
};

module.exports = { validateName };