const Joi = require('joi');

function validate(data) {
  const schema = Joi.object({
    username: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(50).required()
  });

  return schema.validate(data);
}

module.exports = validate;
