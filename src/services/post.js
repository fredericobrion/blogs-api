const { BlogPost, PostCategory, User, Category } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPost.create({
    title,
    content,
    userId,
    published: Date.now(),
    updated: Date.now(),
  });

  const postId = newPost.id;

  const postCategories = categoryIds.map((categoryId) => ({
    postId,
    categoryId,
  }));

  await PostCategory.bulkCreate(postCategories);

  return newPost;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return post;
};

module.exports = {
  create,
  getAll,
  getById,
};
