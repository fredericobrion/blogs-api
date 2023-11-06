const Joi = require('joi');

const createPostSchema = Joi.object({
  title: Joi.string().min(1).required().label('title'),
  content: Joi.string().min(1).required().label('content'),
  categoryIds: Joi.array().min(1).required().label('categoryIds'),
});

module.exports = {
  createPostSchema,
};
