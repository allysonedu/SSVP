const MovementsRepository = require('../../repositories/MovementsRepository');

const CreateNewMovementsService = require('../../services/CreateNewMovementsService');

const DeleteMovementsService = require('../../services/DeleteMovementsService');

const GetOneMovementsService = require('../../services/GetOneMovementsService');

const GetAllMovementsService = require('../../services/GetAllMovementsService');

const UpdateMovementService = require('../../services/UpdateMovementsService');

const movementsRepository = new MovementsRepository();


class MovementsController {

  /**
   * Cria um assistido no banco de dados
  */
  async createMovements(request, response) {
    const {
      conference_id,
      assisted_id,
      movement_date,
      user_id
    } = request.body; // Os valores que vieram do formulario são atribuidos para as variáveis acima

    //Como vou salvar dados em duas tabelas diferentes(movements e movement_items) é preciso iniciar 2 serviços e 2 repositórios diferentes
    const createMovement = new CreateNewMovementsService(movementsRepository);


    //O trecho abaixo salva o assistido enviado para o backend e retorna para a const assisted, a linha salva no banco de dados já com seu respectivo ID
    const movement = await createMovement.execute({
      conference_id,
      assisted_id,
      movement_date,
      user_id
    });

    

    return response.json(movement[0]);
  }

  async updateMovements(request, response) {
    const { id } = request.params;

    const payload = {
      id,
      ...request.body,      
    };

    const movement_items = payload.movement_items

    //trecho para retirar a propriedade de dependentes do objeto de assistidos
    delete payload.movement_items
  
    const updateMovement = new UpdateMovementService(movementsRepository);

    const assistedUpdated = await updateMovement.execute(payload);


    if (movement_items?.length > 0) {
      const updateDependents = new UpdateDependentsService(movement_itemsRepository);

      //Como os dependentes precisam de um Id de assistido para serem salvos, passei o id do assistido recém salvo para a lista de dependentes
      const setDependents = movement_items.map((x) => { return { ...x, assisted_id: assistedUpdated[0].id } })

      //E aqui os dependentes são salvos
      await updateDependents.execute(setDependents)
    }


    return response.json(assistedUpdated);
  }

  async deleteMovements(request, response) {
    const { id } = request.params;

    const deleteMovement = new DeleteMovementsService(movementsRepository);

    await deleteMovement.execute(id);

    return response.json({
      assisted: {
        id,
        deleted: true,
      },
    });
  }

  async getAllMovements(request, response) {
    const getAll = new GetAllMovementsService(movementsRepository);

    const movements = await getAll.execute();

    return response.json(movements);
  }

  async getOneMovements(request, response) {
    const { id } = request.params;

    const getOne = new GetOneMovementsService(movementsRepository);

    const assisted = await getOne.execute(id);

    const getAllDependentsMovement = new GetAllDependentsService(movement_itemsRepository)

    const movement_items = await getAllDependentsMovement.execute(id)
    assisted.movement_items = movement_items
    return response.json(assisted);
  }
}

module.exports = MovementsController;
