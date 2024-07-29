const crypto = require('crypto');

const AppError = require('../../../shared/errors/AppError');

const {
  forgotPassword,
} = require('../../../shared/providers/MailProvider/templates');

class ForgotPasswordSecretaryService {
  constructor(secretaryRepository, mailProvider) {
    this.secretaryRepository = secretaryRepository;
    this.mailProvider = mailProvider;
  }

  async execute({ email }) {
    const secretary = await this.secretaryRepository.checkSecretaryEmail(email);

    if (!secretary) {
      throw new AppError('Secretary not found');
    }
    const token = parseInt(crypto.randomBytes(3).toString('hex'), 16)
      .toString()
      .substring(0, 6);

    const data = {
      secretary_id: secretary.id,
      token,
    };

    const forgot = await this.secretaryRepository.saveTokenInDb(data);

    const message = forgotPassword(secretary.name, token);

    await this.mailProvider.sendMail({
      to: email,
      subject: 'Esqueci minha senha [ALLY]',
      template: message,
    });

    return forgot;
  }
}

module.exports = ForgotPasswordSecretaryService;
