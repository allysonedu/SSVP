const AppError = require('../../../shared/errors/AppError');

class UpdateUsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(payload) {
    const user = await this.usersRepository.getOneUser(payload.id);

    if (!user) throw new AppError('Usuário não encontrado');

    return this.usersRepository.updateUsers(payload);
  }
}

module.exports = UpdateUsersService;
