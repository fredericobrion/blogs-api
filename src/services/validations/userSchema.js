const Joi = require('joi');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const createUserSchema = Joi.object({
  displayName: Joi.string().min(8).required().label('displayName'),
  email: Joi.string().pattern(emailRegex).required().label('email'),
  password: Joi.string().min(6).required().label('password'),
  image: Joi.string(),
}).messages({
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
  'string.pattern.base': '{{#label}} must be a valid email',
});

module.exports = {
  createUserSchema,
};
