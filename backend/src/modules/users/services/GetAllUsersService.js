class GetAllUsersService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute() {
    return this.usersRepository.getAllUsers();
  }
}

module.exports = GetAllUsersService;
