const route = require('express').Router();
const { validateToken } = require('../middlewares/token');
const { validateNewPost } = require('../middlewares/post');
const { create, getAll } = require('../controllers/post');

route.post('/', validateToken, validateNewPost, create);
route.get('/', validateToken, getAll);

module.exports = route;