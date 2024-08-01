const { Modes } = require('celebrate');
const AppError = require('../../../shared/errors/AppError');

class DeleteConferencesService {
  constructor(conferencesRepository) {
    this.conferencesRepository = conferencesRepository;
  }

  async execute(idConferences) {
    const conference = await this.conferencesRepository.getOneConferences(
      idConferences
    );

    if (!conference) throw new AppError('Conference not found');

    return this.conferencesRepository.deleteConferences(idConferences);
  }
}

module.exports = DeleteConferencesService;
