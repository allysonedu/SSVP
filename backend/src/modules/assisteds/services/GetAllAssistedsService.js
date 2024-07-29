class GetAllAssistedsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute() {
    return this.assistedsRepository.getAllAssisteds();
  }
}

module.exports = GetAllAssistedsService;
