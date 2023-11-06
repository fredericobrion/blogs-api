const route = require('express').Router();
const { validateToken } = require('../middlewares/token');
const { validateNewPost } = require('../middlewares/post');
const { create } = require('../controllers/post');

route.post('/', validateToken, validateNewPost, create);

module.exports = route;