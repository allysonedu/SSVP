const AppError = require('../../../shared/errors/AppError');

class DeleteMovementItemsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(idMovementItems) {
    return this.assistedsRepository.deleteMovementItems(idMovementItems);
  }
}

module.exports = DeleteMovementItemsService;
