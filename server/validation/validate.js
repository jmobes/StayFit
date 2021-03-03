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
    user_id: Joi.string().required(),
  });

  return schema.validate(routine);
}

function validateExercise(exercise) {
  const schema = Joi.object({
    user_id: Joi.string().required(),
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

function validateStats(stats) {
  const schema = Joi.object({
    set: Joi.number().required(),
    reps: Joi.number().required(),
    weight: Joi.number().required(),
    routine_exercise_id: Joi.string().required(),
    user_id: Joi.string().required(),
  });

  return schema.validate(stats);
}

function validateUserExercise(exercise) {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    exercise_id: Joi.string().required(),
  });

  return schema.validate(exercise);
}

module.exports.validateUser = validateUser;
module.exports.validateRoutine = validateRoutine;
module.exports.validateExercise = validateExercise;
module.exports.validateRoutineExercise = validateRoutineExercise;
module.exports.validateStats = validateStats;
module.exports.validateUserExercise = validateUserExercise;
