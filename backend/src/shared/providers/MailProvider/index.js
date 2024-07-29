const nodemailer = require('nodemailer');

class MailProvider {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAIL_USER, // Substitua pelo seu usuário Mailtrap "subistituida"
        pass: process.env.MAIL_PASS, // Substitua pela sua senha Mailtrap "subistituida"
      },
    });
  }

  async sendMail({ template, to, subject }) {
    await this.transport.sendMail({
      from: 'NoReply <noreply@Ally.com.br>',
      to,
      subject,
      html: template,
    });
  }
}

module.exports = MailProvider;
