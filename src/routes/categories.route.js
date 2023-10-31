const route = require('express').Router();
const { validateToken } = require('../middlewares/token');
const { validateNewCategory } = require('../middlewares/category');
const { create } = require('../controllers/category');

route.post('/', validateToken, validateNewCategory, create);

module.exports = route;
