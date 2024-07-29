const AdminRepository = require('../../repositories/adminRepository');

const SessionsService = require('../../services/SessionsService');

const adminRepository = new AdminRepository();

class SessionsController {
  async login(request, response) {
    const sessionsService = new SessionsService(adminRepository);

    const admin = await sessionsService.execute(request.body);

    return response.json(admin);
  }
}

module.exports = SessionsController;
