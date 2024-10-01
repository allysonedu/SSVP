const AppError = require('../../../shared/errors/AppError');

class GetOneUserService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(idUser) {
    const user = await this.usersRepository.getOneUser(idUser);

    if (!user) throw new AppError('User not found');

    return user;
  }
}
module.exports = GetOneUserService;
