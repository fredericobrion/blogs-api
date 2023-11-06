const service = require('../services/post');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const id = 1;

  const newPost = await service.create(title, content, categoryIds, id);

  return res.status(201).json(newPost);
};

const getAll = async (_req, res) => {
  const posts = await service.getAll();

  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const post = await service.getById(id);

  if (!post) return res.status(404).json({ message: 'Post does not exist' });

  return res.status(200).json(post);
};

module.exports = {
  create,
  getAll,
  getById,
};
