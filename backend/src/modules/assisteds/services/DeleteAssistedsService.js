const AppError = require('../../../shared/errors/AppError');

class DeleteAssistedsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(idAssisteds) {
    const assisted = await this.assistedsRepository.getOneAssisteds(
      idAssisteds
    );

    if (!assisted) throw new AppError('Assisted not found');

    return this.assistedsRepository.deleteAssisteds(idAssisteds);
  }
}

module.exports = DeleteAssistedsService;
