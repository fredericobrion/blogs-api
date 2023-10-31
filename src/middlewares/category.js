const { createCategorySchema } = require('../services/validations/categorySchema');

const validateNewCategory = async (req, res, next) => {
  const { error } = createCategorySchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = {
  validateNewCategory,
};
