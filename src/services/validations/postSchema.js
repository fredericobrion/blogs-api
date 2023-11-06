const Joi = require('joi');

const createPostSchema = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array().min(1).required(),
});

const postChangeSchema = Joi.object({
  title: Joi.string().min(1),
  content: Joi.string().min(1),
});

module.exports = {
  createPostSchema,
  postChangeSchema,
};
