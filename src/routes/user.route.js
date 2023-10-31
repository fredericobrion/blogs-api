const route = require('express').Router();
const { validateNewUser } = require('../middlewares/user');
const { validateToken } = require('../middlewares/token');
const { createNewUser, findAll } = require('../controllers/user');

route.post('/', validateNewUser, createNewUser);
route.get('/', validateToken, findAll);

module.exports = route;
