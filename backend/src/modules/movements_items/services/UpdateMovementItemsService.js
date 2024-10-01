const AppError = require('../../../shared/errors/AppError');

class UpdateMovementItemsService {
  constructor(movementItemsRepository) {
    this.movementItemsRepository = movementItemsRepository;
  }

  async execute(payload) {
    
    return this.movementItemsRepository.updateMovementItems(payload);
  }
}

module.exports = UpdateMovementItemsService;
