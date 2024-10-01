class CreateNewMovementItemsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(payload) {
    return this.assistedsRepository.createMovementItems(payload);
  }
}

module.exports = CreateNewMovementItemsService;
