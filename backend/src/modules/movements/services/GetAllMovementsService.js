class GetAllMovementsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute() {
    return this.assistedsRepository.getAllMovements();
  }
}

module.exports = GetAllMovementsService;
