const AppError = require('../../../shared/errors/AppError');

class UpdateDependentsService {
  constructor(dependentsRepository) {
    this.dependentsRepository = dependentsRepository;
  }
  async execute(payload) {
    const dependent = await this.dependentsRepository.getAllDependents();
    
    return this.dependentsRepository.updateDependents(payload);
  }
}

module.exports = UpdateDependentsService;
