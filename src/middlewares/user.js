const { createUserSchema } = require('../services/validations/userSchema');
const { findByEmail } = require('../services/users');

const validateNewUser = async (req, res, next) => {
  const { error } = createUserSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const { email } = req.body;
  
  const user = await findByEmail(email);

  console.log(user);
  
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = {
  validateNewUser,
};
