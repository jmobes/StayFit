const Joi = require("joi");

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(50).required(),
  });

  return schema.validate(user);
}

function validateRoutine(routine) {
  const schema = Joi.object({
    userId: Joi.string().required(),
  });

  return schema.validate(routine);
}

module.exports.validateUser = validateUser;
module.exports.validateRoutine = validateRoutine;
