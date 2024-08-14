const DependentsRepository = require('../../repositories/DependentsRepository');

const CreateNewDenpendentsService = require('../../services/CreateNewDependentsService');

<<<<<<< HEAD
const GetAllDependentsService = require('../../services/GetAllDependentsService');
const GetOneDependentsService = require('../../services/GetOneDependentsService');
const UpdateDependentsService = require('../../services/UpdateDependentsService');
const DeleteDependentsService = require('../../services/DeleteDependentsService');

=======
>>>>>>> 8d240e3cf6601f69d73e28d2dad6039f2f0cfde9
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
<<<<<<< HEAD
    const getAll = new GetAllDependentsService(dependentsRepository);

    const dependents = await getAll.execute();

    return response.json(dependents);
  }

  async getOneDependents(request, response) {
    const { id } = request.params;

    const getOne = new GetOneDependentsService(dependentsRepository);

    const dependent = await getOne.execute(id);

    return response.json(dependent);
  }
  async updateDependents(request, response) {
    const { id } = request.params;

    const payload = {
      id,
      ...request.body,
    };
    const updateDependent = new UpdateDependentsService(dependentsRepository);

    const dependentUpdated = await updateDependent.execute(payload);

    return response.json(dependentUpdated);
  }
  async deleteDependents(request, response) {
    const { id } = request.params;

    const deleteDependent = new DeleteDependentsService(dependentsRepository);

    await deleteDependent.execute(id);

    return response.json({
      dependent: {
        id,
        deleted: true,
      },
    });
=======
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
>>>>>>> 8d240e3cf6601f69d73e28d2dad6039f2f0cfde9
  }
}
module.exports = DependentsController;
