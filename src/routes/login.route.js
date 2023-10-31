const route = require('express').Router();
const { validateLogin } = require('../middlewares');
const { generateLoginToken } = require('../controllers/login');

route.post('/', validateLogin, generateLoginToken);

module.exports = route;