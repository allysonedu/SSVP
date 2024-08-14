const AppError = require('../../../shared/errors/AppError');

class DeleteDependentsService {
  constructor(dependentsRepository) {
    this.dependentsRepository = dependentsRepository;
  }

  async execute(idDependents) {
    const dependent = await this.dependentsRepository.getOneDependents(
      idDependents
    );

    if (!dependent) throw new AppError('Dependent not found');

    return this.dependentsRepository.deleteDependents(idDependents);
  }
}

module.exports = DeleteDependentsService;
