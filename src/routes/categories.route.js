const route = require('express').Router();
const { validateToken } = require('../middlewares/token');
const { validateNewCategory } = require('../middlewares/category');
const { create, getAllCategories } = require('../controllers/category');

route.post('/', validateToken, validateNewCategory, create);
route.get('/', validateToken, getAllCategories);

module.exports = route;
