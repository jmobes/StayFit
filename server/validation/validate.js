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

function validateExercise(exercise) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
  });

  return schema.validate(exercise);
}

function validateRoutineExercise(routine_exercise) {
  const schema = Joi.object({
    routine_id: Joi.string().required(),
    exercise_id: Joi.string().required(),
  });

  return schema.validate(routine_exercise);
}

module.exports.validateUser = validateUser;
module.exports.validateRoutine = validateRoutine;
module.exports.validateExercise = validateExercise;
module.exports.validateRoutineExercise = validateRoutineExercise;
