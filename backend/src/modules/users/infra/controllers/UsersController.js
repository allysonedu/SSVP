const CreateUsersService = require('../../services/CreateUsersService');

const ForgotPasswordUsersService = require('../../services/ForgotPasswordUsersService');

const ResetPasswordUsersService = require('../../services/ResetPasswordUsersService');

const UsersRepository = require('../../repositories/usersRepository');

const MailProvider = require('../../../../shared/providers/MailProvider');

const usersRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { name, email, whatsapp, password, username } = request.body;

    const createUsers = new CreateUsersService(usersRepository);

    const users = await createUsers.execute({
      name,
      email,
      whatsapp,
      password,
      username,
    });

    return response.json({ users });
  }

  async forgotPasswordUsers(request, response) {
    const mailProvider = new MailProvider();

    const forgotPasswordUsers = new ForgotPasswordUsersService(
      usersRepository,
      mailProvider
    );

    const { email } = request.body;

    const forgot = await forgotPasswordUsers.execute({ email });

    return response.json(forgot);
  }

  async resetPasswordUsers(request, response) {
    const resetPasswordUsers = new ResetPasswordUsersService(usersRepository);

    const { token } = request.params;
    const { password } = request.body;

    const result = await resetPasswordUsers.execute({
      token,
      password,
    });
    return response.json(result);
  }

  async getAllUsers(request, response) {
    return response.json({ getAll: true });
  }

  async updateUsers(request, response) {
    return response.json({ update: true });
  }

  async deleteUsers(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = UsersController;
