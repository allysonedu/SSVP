const AppError = require('../../../shared/errors/AppError');

class UpdateDependentsService {
  constructor(dependentsRepository) {
    this.dependentsRepository = dependentsRepository;
  }
  async execute(payload) {
    const dependent = await this.dependentsRepository.getAllDependents(payload.assisted_id);
  
    const itensRemovidos = dependent.filter(
      item => !payload.some(novoItem => novoItem.id === item.id)
    );

    const idsToDelete = itensRemovidos.map(item => item.id);


    await this.dependentsRepository.deleteDependents(idsToDelete)
    await this.dependentsRepository.updateDependents(payload);


  }
}

module.exports = UpdateDependentsService;
