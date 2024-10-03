class GetAllMovementItemsService {
  constructor(movementItemsRepository) {
    this.movementItemsRepository = movementItemsRepository;
  }

  async execute(movement_id) {
    return this.movementItemsRepository.getAllMovementItems(movement_id);
  }
}

module.exports = GetAllMovementItemsService;
