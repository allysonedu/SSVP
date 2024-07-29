const crypto = require('crypto');

const AppError = require('../../../shared/errors/AppError');

const {
  forgotPassword,
} = require('../../../shared/providers/MailProvider/templates');

class ForgotPasswordAdminService {
  constructor(adminRepository, mailProvider) {
    this.adminRepository = adminRepository;
    this.mailProvider = mailProvider;
  }

  async execute({ email }) {
    const admin = await this.adminRepository.checkAdminEmail(email);

    if (!admin) {
      throw new AppError('Admin not found ');
    }

    const token = parseInt(crypto.randomBytes(3).toString('hex'), 16)
      .toString()
      .substring(0, 6);

    const data = {
      admin_id: admin.id,
      token,
    };
    const forgot = await this.adminRepository.saveTokenInDb(data);

    const message = forgotPassword(admin.name, token);

    await this.mailProvider.sendMail({
      to: email,
      subject: 'Esqueci minha senha [Ally]',
      template: message,
    });
    return forgot;
  }
}

module.exports = ForgotPasswordAdminService;
