const Jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const { createPostSchema, postChangeSchema } = require('../services/validations/postSchema');
const { getAllCategoriesIds } = require('../services/categories');
const { getById } = require('../services/post');

const validateNewPost = async (req, res, next) => {
  const { error } = createPostSchema.validate(req.body);

  if (error) return res.status(400).json({ message: 'Some required fields are missing' });

  const categories = await getAllCategoriesIds();

  const { categoryIds } = req.body;

  const invalidCategory = categoryIds.some((categoryId) => !categories.includes(categoryId));

  if (invalidCategory) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};

const validatePostChangeBody = async (req, res, next) => {
  const { error } = postChangeSchema.validate(req.body);

  if (error) return res.status(400).json({ message: 'Some required fields are missing' });

  next();
};

const extratcToken = (bearerToken) => bearerToken.split(' ')[1];

const validateAuthorIdentity = async (req, res, next) => {
  const token = extratcToken(req.headers.authorization);

  const decoded = Jwt.verify(token, JWT_SECRET);
  
  const post = await getById(req.params.id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  if (post.userId !== decoded.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};

module.exports = {
  validateNewPost,
  validatePostChangeBody,
  validateAuthorIdentity,
};
