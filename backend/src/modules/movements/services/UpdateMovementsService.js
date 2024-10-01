const AppError = require('../../../shared/errors/AppError');

class UpdateMovementsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(payload) {
    const assisted = await this.assistedsRepository.getOneMovements(payload.id);

    if (!assisted) throw new AppError('Movements not found');

    return this.assistedsRepository.updateMovements(payload);
  }
}

module.exports = UpdateMovementsService;
