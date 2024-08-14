const AppError = require('../../../shared/errors/AppError');

class GetOneDependentsService {
  constructor(dependentsRepository) {
    this.dependentsRepository = dependentsRepository;
  }

  async execute(idDependents) {
    const dependent = await this.dependentsRepository.getOneDependents(
      idDependents
    );
    if (!dependent) throw new AppError('Dependent not found');

    return dependent;
  }
}

module.exports = GetOneDependentsService;
