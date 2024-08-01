const UsersRepository = require('../../repositories/usersRepository');

const SessionsService = require('../../services/SessionsService');

const usersRepository = new UsersRepository();

class SessionsController {
  async login(request, response) {
    const sessionsService = new SessionsService(usersRepository);

    const users = await sessionsService.execute(request.body);

    return response.json(users);
  }
}

module.exports = SessionsController;
