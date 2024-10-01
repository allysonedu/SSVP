const AppError = require('../../../shared/errors/AppError');

class GetOneMovementsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(idMovements) {
    const assisted = await this.assistedsRepository.getOneMovements(
      idMovements
    );
    if (!assisted) throw new AppError('Movimentação não encontrada !!');
    
    const preparedAssited = {...assisted, movement_date: assisted.movement_date.toISOString().split('.')[0]}

    return preparedAssited;
  }
}
module.exports = GetOneMovementsService;
