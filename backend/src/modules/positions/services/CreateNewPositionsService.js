class CreateNewPositionsService {
  constructor(positionsRepository) {
    this.positionsRepository = positionsRepository;
  }

  async execute(payload) {
    return this.positionsRepository.createPositions(payload);
  }
}

module.exports = CreateNewPositionsService;
