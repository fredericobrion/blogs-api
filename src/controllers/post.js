const Jwt = require('jsonwebtoken');
const service = require('../services/post');

const { JWT_SECRET } = process.env;

const extratcToken = (bearerToken) => bearerToken.split(' ')[1];

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const token = extratcToken(req.headers.authorization);

  const decoded = Jwt.verify(token, JWT_SECRET);

  const { id } = decoded;

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

const update = async (req, res) => {
  const { title, content } = req.body;

  const { id } = req.params;

  const updatedPost = await service.update(title, content, id);

  return res.status(200).json(updatedPost);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};
