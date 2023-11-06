const { createPostSchema } = require('../services/validations/postSchema');
const { getAllCategoriesIds } = require('../services/categories');

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

module.exports = {
  validateNewPost,
};
