const route = require('express').Router();
const { validateToken } = require('../middlewares/token');
const {
  validateNewPost,
  validatePostChangeBody,
  validateAuthorIdentity,
} = require('../middlewares/post');
const {
  create,
  getAll,
  getById,
  update,
  deletePost,
} = require('../controllers/post');

route.post('/', validateToken, validateNewPost, create);
route.get('/', validateToken, getAll);
route.get('/:id', validateToken, getById);
route.put(
  '/:id',
  validateToken,
  validatePostChangeBody,
  validateAuthorIdentity,
  update,
);
route.delete('/:id', validateToken, validateAuthorIdentity, deletePost);

module.exports = route;