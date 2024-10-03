const AppError = require('../../../shared/errors/AppError');

class UpdateMovementItemsService {
  constructor(movementItemsRepository) {
    this.movementItemsRepository = movementItemsRepository;
  }

  async execute(payload, movement_id) {
    const existingItems = await this.movementItemsRepository.getAllMovementItems(movement_id);

    // Filtra novos itens (sem id) que precisam ser adicionados
    const newItems = payload.filter(item => !item.id);

    // Filtra itens existentes (com id) que precisam ser atualizados
    const updatedItems = payload.filter(item => item.id);

    // Identifica itens removidos (itens que estão no banco mas não no novo array)
    const removedItems = existingItems.filter(existingItem => 
        !payload.some(item => item.id === existingItem.id)
    );

    const idsToDelete = removedItems.map(item => item.id);
    await this.movementItemsRepository.deleteMovementItems(idsToDelete)
    await this.movementItemsRepository.updateMovementItems(newItems);
  }
}

module.exports = UpdateMovementItemsService;
