const DependentsRepository = require('../../repositories/DependentsRepository');

const CreateNewDenpendentsService = require('../../services/CreateNewDependentsService');

const dependentsRepository = new DependentsRepository();

class DependentsController {
  async createDependents(request, response) {
    const { name, created_at, relationship, occupation } = request.body;

    const createDependent = new CreateNewDenpendentsService(
      dependentsRepository
    );

    const dependent = await createDependent.execute({
      name,
      created_at,
      relationship,
      occupation,
    });
    return response.json(dependent[0]);
  }
  async getAllDependents(request, response) {
    return response.json({ getAll: true });
  }
  async getOneDependents(request, response) {
    return response.json({ getOne: true });
  }
  async updateDependents(request, response) {
    return response.json({ update: true });
  }
  async deleteDependents(request, response) {
    return response.json({ delete: true });
  }
}
module.exports = DependentsController;
