class GetAllDependentsService {
  constructor(dependentsRepository) {
    this.dependentsRepository = dependentsRepository;
  }

  async execute() {
    return this.dependentsRepository.getAllDependents();
  }
}

module.exports = GetAllDependentsService;
