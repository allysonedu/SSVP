// aqui o Middleware pode interceptar erros que ocorrem durante o processamento da requisição e fornecer respostas adequadas.

const ConferencesRepository = require('../repositories/ConferencesRepository');

const AppError = require('../../../shared/errors/AppError');

const conferencesRepository = new ConferencesRepository();

module.exports = {
  async verifyIfEmailAlreadyExists(request, response, next) {
    const { email } = request.body;

    const emailExists = await conferencesRepository.checkConferencesEmail({
      email,
    });
    if (emailExists) throw new AppError('Email already exists', 401);
    next();
  },
};
