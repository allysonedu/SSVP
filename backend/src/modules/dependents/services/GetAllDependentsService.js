class GetAllDependentsService {
  constructor(dependentsRepository) {
    this.dependentsRepository = dependentsRepository;
  }

  async execute(assisted_id) {
    return this.dependentsRepository.getAllDependents(assisted_id);
  }
}

module.exports = GetAllDependentsService;
