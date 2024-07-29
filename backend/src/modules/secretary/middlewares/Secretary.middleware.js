const SecretaryRepository = require('../repositories/SecretaryRepository');

const AppError = require('../../../shared/errors/AppError');

const secretaryRepository = new SecretaryRepository();

module.exports = {
  async verifyIfEmailAlreadyExists(request, response, next) {
    const { email } = request.body;

    const emailExists = await secretaryRepository.checkSecretaryEmail(email);
    if (emailExists) throw new AppError('Email already exists', 401);

    next();
  },
};
