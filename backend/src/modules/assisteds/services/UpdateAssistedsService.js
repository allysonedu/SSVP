const AppError = require('../../../shared/errors/AppError');

class UpdateAssistedsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(payload) {
    const assisted = await this.assistedsRepository.getOneAssisteds(payload.id);

    if (!assisted) throw new AppError('Assisted not found');

    return this.assistedsRepository.updateAssisteds(payload);
  }
}

module.exports = UpdateAssistedsService;
