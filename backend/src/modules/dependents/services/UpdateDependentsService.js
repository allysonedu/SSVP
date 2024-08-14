const AppError = require('../../../shared/errors/AppError');

class UpdateDependentsService {
  constructor(dependentsRepository) {
    this.dependentsRepository = dependentsRepository;
  }
  async execute(payload) {
    const dependent = await this.dependentsRepository.getOneDependents(
      payload.id
    );

    if (!dependent) throw new AppError('Dependent not found');

    return this.dependentsRepository.updateDependents(payload);
  }
}

module.exports = UpdateDependentsService;
