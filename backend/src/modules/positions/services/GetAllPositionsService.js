class GetAllPositionsService {
  constructor(positionsRepository) {
    this.positionsRepository = positionsRepository;
  }

  async execute() {
    return this.positionsRepository.getAllPositions();
  }
}

module.exports = GetAllPositionsService;
