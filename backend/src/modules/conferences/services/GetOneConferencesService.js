const AppError = require('../../../shared/errors/AppError');

class GetOneConferencesService {
  constructor(conferencesRepository) {
    this.conferencesRepository = conferencesRepository;
  }

  async execute(idConferences) {
    const conference = await this.conferencesRepository.getOneConferences(
      idConferences
    );

    if (!conference) throw new AppError('conference not found');

    return conference;
  }
}

module.exports = GetOneConferencesService;
