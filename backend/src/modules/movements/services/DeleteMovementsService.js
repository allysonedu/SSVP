const AppError = require('../../../shared/errors/AppError');

class DeleteMovementsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(idMovements) {
    return this.assistedsRepository.deleteMovements(idMovements);
  }
}

module.exports = DeleteMovementsService;
