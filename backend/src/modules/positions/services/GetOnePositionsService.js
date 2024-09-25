const AppError = require('../../../shared/errors/AppError');

class GetOnePositionsService {
  constructor(positionsRepository) {
    this.positionsRepository = positionsRepository;
  }

  async execute(idPositions) {
    const assisted = await this.positionsRepository.getOnePositions(
      idPositions
    );
    if (!assisted) throw new AppError('Assisted not found');
  

    return assisted;
  }
}
module.exports = GetOnePositionsService;
