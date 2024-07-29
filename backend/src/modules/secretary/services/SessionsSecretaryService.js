const jwt = require('jsonwebtoken');

const AppError = require('../../../shared/errors/AppError');

const { compare } = require('../../../shared/utils/encrypt');

class SessionsSecretaryService {
  constructor(secretaryRepository) {
    this.secretaryRepository = secretaryRepository;
  }

  async execute(payload) {
    const { email, password } = payload;

    const secretary = await this.secretaryRepository.checkSecretaryEmail(email);
    if (!secretary) throw new AppError('secretary not found');

    await compare(password, secretary.password);

    const token = jwt.sign({ id: secretary.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    delete secretary.password;

    return {
      token,
      secretary,
    };
  }
}

module.exports = SessionsSecretaryService;
