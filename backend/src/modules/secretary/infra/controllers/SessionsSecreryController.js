const SecretaryRepository = require('../../repositories/SecretaryRepository');

const SessionsSecretaryService = require('../../services/SessionsSecretaryService');

const secretaryRepository = new SecretaryRepository();

class SessionsSecreryController {
  async login(request, response) {
    const sessionsSecretaryService = new SessionsSecretaryService(
      secretaryRepository
    );

    const secretary = await sessionsSecretaryService.execute(request.body);

    return response.json(secretary);
  }
}

module.exports = SessionsSecreryController;
