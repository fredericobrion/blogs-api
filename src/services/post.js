const { Op } = require('sequelize');

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

const update = async (title, content, id) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const updatedPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return updatedPost;
}; 

const deletePost = async (id) => {
  const post = await BlogPost.findByPk(id);

  if (!post) return null;

  await BlogPost.destroy({ where: { id } });

  return post;
};

const searchByQuery = async (q) => {
  if (!q) {
    const posts = getAll();
    return posts;
  }

  const posts = BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deletePost,
  searchByQuery,
};
