const route = require('express').Router();
const { validateNewUser } = require('../middlewares/user');
const { createNewUser } = require('../controllers/user');

route.post('/', validateNewUser, createNewUser);

module.exports = route;
