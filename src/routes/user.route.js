const route = require('express').Router();
const { validateNewUser } = require('../middlewares/user');
const { validateToken } = require('../middlewares/token');
const { createNewUser, findAll, findById, deleteUser } = require('../controllers/user');

route.post('/', validateNewUser, createNewUser);
route.get('/', validateToken, findAll);
route.get('/:id', validateToken, findById);
route.delete('/me', validateToken, deleteUser, deleteUser);

module.exports = route;
