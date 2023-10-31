const route = require('express').Router();
const { validateNewUser } = require('../middlewares/user');
const { validateToken } = require('../middlewares/token');
const { createNewUser, findAll, findById } = require('../controllers/user');

route.post('/', validateNewUser, createNewUser);
route.get('/', validateToken, findAll);
route.get('/:id', validateToken, findById);

module.exports = route;
