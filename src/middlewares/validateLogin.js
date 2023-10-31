const { findByEmail } = require('../services/users');

module.exports = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: 'Some required fields are missing' });
  }

  const user = await findByEmail(email);

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  res.locals.user = user.dataValues;

  next();
};
