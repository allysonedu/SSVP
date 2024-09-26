const UsersRepository = require('../../repositories/usersRepository');

const SessionsService = require('../../services/SessionsService');

const usersRepository = new UsersRepository();

class SessionsController {
  async login(request, response) {
    const sessionsService = new SessionsService(usersRepository);

    const user = await sessionsService.execute(request.body);

    return response.json(user);
  }
}

module.exports = SessionsController;
