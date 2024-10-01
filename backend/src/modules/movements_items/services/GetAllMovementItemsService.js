class GetAllMovementItemsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute() {
    return this.assistedsRepository.getAllMovementItems();
  }
}

module.exports = GetAllMovementItemsService;
