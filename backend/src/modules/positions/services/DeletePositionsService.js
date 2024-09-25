const AppError = require('../../../shared/errors/AppError');

class DeletePositionsService {
  constructor(positionsRepository) {
    this.positionsRepository = positionsRepository;
  }

  async execute(idPositions) {
    return this.positionsRepository.deletePositions(idPositions);
  }
}

module.exports = DeletePositionsService;
