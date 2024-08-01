const AppError = require('../../../shared/errors/AppError');

class UpdateConferencesService {
  constructor(conferencesRepository) {
    this.conferencesRepository = conferencesRepository;
  }

  async execute(payload) {
    const conference = await this.conferencesRepository.getOneConferences(
      payload.id
    );
    if (!conference) throw new AppError('Conference not found');

    return this.conferencesRepository.updateConferences(payload);
  }
}

module.exports = UpdateConferencesService;
