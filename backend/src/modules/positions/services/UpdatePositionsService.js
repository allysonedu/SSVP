const AppError = require('../../../shared/errors/AppError');

class UpdatePositionsService {
  constructor(positionsRepository) {
    this.positionsRepository = positionsRepository;
  }

  async execute(payload) {
    const positions = await this.positionsRepository.getOnePositions(payload.id);

    if (!positions) throw new AppError('Cargo não Encontrado');

    return this.positionsRepository.updatePositions(payload);
  }
}

module.exports = UpdatePositionsService;
