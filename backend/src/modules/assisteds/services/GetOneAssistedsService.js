const AppError = require('../../../shared/errors/AppError');

class GetOneAssistedsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(idAssisteds) {
    const assisted = await this.assistedsRepository.getOneAssisteds(
      idAssisteds
    );
    if (!assisted) throw new AppError('Assisted not found');
  

    return assisted;
  }
}
module.exports = GetOneAssistedsService;
