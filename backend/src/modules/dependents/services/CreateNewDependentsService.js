class CreateNewDenpendentsService {
  constructor(denpendentsRepository) {
    this.denpendentsRepository = denpendentsRepository;
  }

  async execute(payload) {

    return this.denpendentsRepository.createDependents(payload);
  }
}

module.exports = CreateNewDenpendentsService;
