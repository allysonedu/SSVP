class CreateNewAssistedsService {
  constructor(assistedsRepository) {
    this.assistedsRepository = assistedsRepository;
  }

  async execute(payload) {
    return this.assistedsRepository.createAssisteds(payload);
  }
}

module.exports = CreateNewAssistedsService;
