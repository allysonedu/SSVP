const jwt = require('jsonwebtoken');

const AppError = require('../../../shared/errors/AppError');

const { compare } = require('../../../shared/utils/encrypt');

class SessionsService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload) {
    const { email, password } = payload;

    const users = await this.usersRepository.checkUsersEmail(email);
    if (!users) throw new AppError('users not found');

    await compare(password, users.password);

    const token = jwt.sign({ id: users.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    delete users.password;

    return {
      token,
      users,
    };
  }
}

module.exports = SessionsService;
