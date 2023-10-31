const Joi = require('joi');

const createCategorySchema = Joi.object({
  name: Joi.string().min(1).required().label('name')
    .label('name'),
}).messages({
  'string.required': '{{#label}} is required',
  'string.min': '{{#label}} is required',
});

module.exports = {
  createCategorySchema,
};
