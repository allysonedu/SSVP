const bcrypt = require('bcrypt');

const AppError = require('../errors/AppError');

module.exports = {
  async generateHash(password) {
    const hash = await bcrypt.hash(password, Number(process.env.ENCRYPT_BITS));
    return hash;
  },

  async compare(password, hashedPassword) {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);

    if (!passwordMatch) throw new AppError('Credentials do not match', 401);
  },
};
