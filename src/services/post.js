const { BlogPost, PostCategory } = require('../models');

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

module.exports = {
  create,
};
