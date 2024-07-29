const AssistedsRepository = require('../../repositories/AssistedsRepository');

const CreateNewAssistedsService = require('../../services/CreateNewAssistedsService');

const DeleteAssistedsService = require('../../services/DeleteAssistedsService');

const GetOneAssistedsService = require('../../services/GetOneAssistedsService');

const GetAllAssistedsService = require('../../services/GetAllAssistedsService');

const UpdateAssistedService = require('../../services/UpdateAssistedsService');

const assistedsRepository = new AssistedsRepository();

class AssistedsController {
  async createAssisteds(request, response) {
    const {
      name,
      age,
      whatsapp,
      profession,
      district,
      maritalStatus = false,
    } = request.body;

    const createAssisted = new CreateNewAssistedsService(assistedsRepository);

    const assisted = await createAssisted.execute({
      name,
      age,
      whatsapp,
      profession,
      district,
      maritalStatus,
    });

    return response.json(assisted[0]);
  }

  async updateAssisteds(request, response) {
    const { id } = request.params;

    const payload = {
      id,
      ...request.body,
    };

    const updateAssisted = new UpdateAssistedService(assistedsRepository);

    const assistedUpdated = await updateAssisted.execute(payload);

    return response.json(assistedUpdated);
  }

  async getAllAssisteds(request, response) {
    return response.json({ getAll: true });
  }

  async getOneAssisteds(request, response) {
    return response.json({ getAllOne: true });
  }

  async deleteAssisteds(request, response) {
    const { id } = request.params;

    const deleteAssisted = new DeleteAssistedsService(assistedsRepository);

    await deleteAssisted.execute(id);

    return response.json({
      assisted: {
        id,
        deleted: true,
      },
    });
  }

  async getAllAssisteds(request, response) {
    const getAll = new GetAllAssistedsService(assistedsRepository);

    const assisteds = await getAll.execute();

    return response.json(assisteds);
  }

  async getOneAssisteds(request, response) {
    const { id } = request.params;

    const getOne = new GetOneAssistedsService(assistedsRepository);

    const assisted = await getOne.execute(id);
    return response.json(assisted);
  }
}

module.exports = AssistedsController;
