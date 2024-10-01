class CreateNewMovementsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(payload) {
    return this.assistedsRepository.createMovements(payload);
  }
}

module.exports = CreateNewMovementsService;
