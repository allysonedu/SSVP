/**
 * Controller controla todo o fluxo de entrada e saida dos dados da aplicação
 */

const ConferencesRepository = require('../../repositories/ConferencesRepository');

const CreateNewConferencesService = require('../../services/CreateNewConferencesService');

const GetAllConferencesService = require('../../services/GetAllConferencesService');

const GetOneConferencesService = require('../../services/GetOneConferencesService');

const UpdateConferencesService = require('../../services/UpdateConferencesService');

const DeleteConferencesService = require('../../services/DeleteConferencesService');

const conferencesRepository = new ConferencesRepository();

class ConferencesController {
  async createConferences(request, response) {
    const { name, cep, city, state, username, email } = request.body;

    const createConference = new CreateNewConferencesService(
      conferencesRepository
    );

    const conference = await createConference.execute({
      name,
      cep,
      city,
      state,
      username,
      email,
    });

    return response.json(conference[0]);
  }
  async getAllConferences(request, response) {
    const getAll = new GetAllConferencesService(conferencesRepository);

    const conferences = await getAll.execute();

    return response.json(conferences);
  }

  async getOneConferences(request, response) {
    const { id } = request.params;

    const getOne = new GetOneConferencesService(conferencesRepository);

    const conference = await getOne.execute(id);

    return response.json(conference);
  }
  async updateConferences(request, response) {
    const { id } = request.params;

    const payload = {
      id,
      ...request.body,
    };

    const updateConference = new UpdateConferencesService(
      conferencesRepository
    );

    const conferenceUpdated = await updateConference.execute(payload);

    return response.json(conferenceUpdated);
  }
  async deleteConferences(request, response) {
    const { id } = request.params;

    const deleteConference = new DeleteConferencesService(
      conferencesRepository
    );
    await deleteConference.execute(id);

    return response.json({
      conference: {
        id,
        deleted: true,
      },
    });
  }
}

module.exports = ConferencesController;
