const CreateAdminService = require('../../services/CreateAdminService');

const ForgotPasswordAdminService = require('../../services/ForgotPasswordAdminService');

const ResetPasswordAdminService = require('../../services/ResetPasswordAdminService');

const AdminRepository = require('../../repositories/adminRepository');

const MailProvider = require('../../../../shared/providers/MailProvider');

const adminRepository = new AdminRepository();

class AdminController {
  async createAdmin(request, response) {
    const { name, email, whatsapp, password, username } = request.body;

    const createAdmin = new CreateAdminService(adminRepository);

    const admin = await createAdmin.execute({
      name,
      email,
      whatsapp,
      password,
      username,
    });

    return response.json({ admin });
  }

  async forgotPasswordAdmin(request, response) {
    const mailProvider = new MailProvider();

    const forgotPasswordAdmin = new ForgotPasswordAdminService(
      adminRepository,
      mailProvider
    );

    const { email } = request.body;

    const forgot = await forgotPasswordAdmin.execute({ email });

    return response.json(forgot);
  }

  async resetPasswordAdmin(request, response) {
    const resetPasswordAdmin = new ResetPasswordAdminService(adminRepository);

    const { token } = request.params;
    const { password } = request.body;

    const result = await resetPasswordAdmin.execute({
      token,
      password,
    });
    return response.json(result);
  }

  async getAllAdmin(request, response) {
    return response.json({ getAll: true });
  }

  async updateAdmin(request, response) {
    return response.json({ update: true });
  }

  async deleteAdmin(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = AdminController;
