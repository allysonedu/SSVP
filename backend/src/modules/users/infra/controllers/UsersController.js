const CreateUsersService = require('../../services/CreateUsersService');

const ForgotPasswordUsersService = require('../../services/ForgotPasswordUsersService');

const GetAllUsersService = require('../../services/GetAllUsersService');

const ResetPasswordUsersService = require('../../services/ResetPasswordUsersService');

const UsersRepository = require('../../repositories/usersRepository');

const MailProvider = require('../../../../shared/providers/MailProvider');
const GetOneUserService = require('../../services/GetOneUsersService');
const UpdateUsersService = require('../../services/UpdateUsersService');
const DeleteUsersService = require('../../services/DeleteUsersService');

const usersRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { name, email, whatsapp, password, username, position_id } = request.body;

    const createUsers = new CreateUsersService(usersRepository);

    const users = await createUsers.execute({
      name,
      email,
      whatsapp,
      password,
      username,
      position_id
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
    const getAll = new GetAllUsersService(usersRepository);

    const users = await getAll.execute();

    return response.json(users);
  }

  async getOneUser(request, response) {
    const { id } = request.params;

    const getOne = new GetOneUserService(usersRepository);

    const users = await getOne.execute(id);
    return response.json(users);
  }

  async updateUsers(request, response) {
    const { id } = request.params;

    const payload = {
      id,
      ...request.body,
    };
    const updateUsers = new UpdateUsersService(usersRepository);

    const update = await updateUsers.execute(payload);

    return response.json(update);
  }

  async deleteUsers(request, response) {
    const { id } = request.params;

    const deleteUser = new DeleteUsersService(usersRepository);

    await deleteUser.execute(id);
    return response.json({
      users: {
        id,
        deleted: true,
      },
    });
  }
}

module.exports = UsersController;
