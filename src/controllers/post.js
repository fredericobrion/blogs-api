const service = require('../services/post');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const id = 1;

  const newPost = await service.create(title, content, categoryIds, id);

  return res.status(201).json(newPost);
};

const getAll = async (req, res) => {
  const posts = await service.getAll();

  return res.status(200).json(posts);
};

module.exports = {
  create,
  getAll,
};
