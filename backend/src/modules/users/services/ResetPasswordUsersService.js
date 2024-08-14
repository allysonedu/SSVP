const AppError = require('../../../shared/errors/AppError');

const { generateHash } = require('../../../shared/utils/encrypt');

class ResetPasswordUsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload) {
    const { token, password } = payload;

    const users = await this.usersRepository.getTokenUser(token);
    if (!users) throw new AppError('users not found');

    const passwordHashed = await generateHash(password);

    const data = {
      usersId: users.users_id,
      password: passwordHashed,
    };

    const result = await this.usersRepository.updatePasswordAndDeleteToken(
      data
    );
    return result;
  }
}

module.exports = ResetPasswordUsersService;
