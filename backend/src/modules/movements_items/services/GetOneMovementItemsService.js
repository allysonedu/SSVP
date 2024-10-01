const AppError = require('../../../shared/errors/AppError');

class GetOneMovementItemsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(idMovementItems) {
    const assisted = await this.assistedsRepository.getOneMovementItems(
      idMovementItems
    );
    if (!assisted) throw new AppError('MovementItems not found');
  

    return assisted;
  }
}
module.exports = GetOneMovementItemsService;
