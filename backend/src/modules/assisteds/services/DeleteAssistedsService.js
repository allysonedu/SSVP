const AppError = require('../../../shared/errors/AppError');

class DeleteAssistedsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(idAssisteds) {
    return this.assistedsRepository.deleteAssisteds(idAssisteds);
  }
}

module.exports = DeleteAssistedsService;
