const SecretaryRepository = require('../../repositories/SecretaryRepository');

const CreateNewSecretaryService = require('../../services/CreateNewSecretaryService');

const MailProvider = require('../../../../shared/providers/MailProvider');

const ForgotPasswordSecretaryService = require('../../services/ForgotPasswordSecretaryService');

const ResetPasswordSecretaryService = require('../../services/ResetPasswordSecretaryService');

const secretaryRepository = new SecretaryRepository();

class SecretaryControllher {
  async createSecretary(request, response) {
    const { name, email, whatsapp, password, username } = request.body;

    const createSecretary = new CreateNewSecretaryService(secretaryRepository);

    const secretary = await createSecretary.execute({
      name,
      email,
      whatsapp,
      password,
      username,
    });
    return response.json({ secretary });
  }

  async forgotPasswordSecretary(request, response) {
    const mailProvider = new MailProvider();

    const forgotPasswordSecretary = new ForgotPasswordSecretaryService(
      secretaryRepository,
      mailProvider
    );

    const { email } = request.body;

    const forgot = await forgotPasswordSecretary.execute({ email });

    return response.json(forgot);
  }

  async resetPasswordSecretary(request, response) {
    const resetPasswordSecretary = new ResetPasswordSecretaryService(
      secretaryRepository
    );
    const { token } = request.params;
    const { password } = request.body;

    const result = await resetPasswordSecretary.execute({
      token,
      password,
    });
    return response.json(result);
  }

  async getAllSecretary(request, response) {
    return response.json({ getAll: true });
  }

  async updateSecretary(request, response) {
    return response.json({ update: true });
  }

  async deleteSecretary(request, response) {
    return response.json({ delete: true });
  }
}
module.exports = SecretaryControllher;
