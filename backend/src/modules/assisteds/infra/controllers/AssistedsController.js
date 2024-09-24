const AssistedsRepository = require('../../repositories/AssistedsRepository');
const DependentsRepository = require('../../../dependents/repositories/DependentsRepository');

const CreateNewAssistedsService = require('../../services/CreateNewAssistedsService');
const CreateNewDenpendentsService = require('../../../dependents/services/CreateNewDependentsService');

const DeleteAssistedsService = require('../../services/DeleteAssistedsService');

const GetOneAssistedsService = require('../../services/GetOneAssistedsService');

const GetAllAssistedsService = require('../../services/GetAllAssistedsService');

const UpdateAssistedService = require('../../services/UpdateAssistedsService');

const assistedsRepository = new AssistedsRepository();
const dependentsRepository = new DependentsRepository();

class AssistedsController {

  /**
   * Cria um assistido no banco de dados
  */  
  async createAssisteds(request, response) {
    const {
      name,
      age,
      whatsapp,
      profession,
      district,
      cpf,
      Case_report,
      family_income,
      explain,
      Spouse,
      maritalStatus = false,
      home = false,
      dependents
    } = request.body; // Os valores que vieram do formulario são atribuidos para as variáveis acima

    //Como vou salvar dados em duas tabelas diferentes(assisteds e dependents) é preciso iniciar 2 serviços e 2 repositórios diferentes
    const createAssisted = new CreateNewAssistedsService(assistedsRepository);
    const createDependents = new CreateNewDenpendentsService(dependentsRepository);

    //O trecho abaixo salva o assistido enviado para o backend e retorna para a const assisted, a linha salva no banco de dados já com seu respectivo ID
    const assisted = await createAssisted.execute({
      name,
      age,
      whatsapp: "",
      profession,
      district,
      cpf,
      Case_report,
      family_income,
      explain,
      Spouse,
      maritalStatus,
      home,
    });

    //Como os dependentes precisam de um Id de assistido para serem salvos, passei o id do assistido recém salvo para a lista de dependentes
    const setDependents = dependents.map((x) => { return { ...x, assisted_id: assisted.id } })
    
    //E aqui os dependentes são salvos
    const depen = await createDependents.execute(setDependents)
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

//       name = nome
//       age = idade
//       whatsapp = numero
//       profession = profisão
//       district = bairro
//       cpf =  cpf
//       Case_report = reportar caso
//       family_income = renda familiar
//       explain explicar
//       Spouse = cônjuge
//       maritalStatus = estatos civil
//       home = casa
