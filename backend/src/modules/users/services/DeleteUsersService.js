const AppError = require('../../../shared/errors/AppError');

class DeleteUsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(idUsers) {
    const user = await this.usersRepository.getOneUser(idUsers);

    if (!user) throw new AppError('User not found');

    return this.usersRepository.deleteUsers(idUsers);
  }
}

module.exports = DeleteUsersService;
