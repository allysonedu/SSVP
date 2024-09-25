const PositionsRepository = require('../../repositories/PositionsRepository');
const DependentsRepository = require('../../../dependents/repositories/DependentsRepository');

const CreateNewPositionsService = require('../../services/CreateNewPositionsService');
const CreateNewDenpendentsService = require('../../../dependents/services/CreateNewDependentsService');

const DeletePositionsService = require('../../services/DeletePositionsService');

const GetOnePositionsService = require('../../services/GetOnePositionsService');

const GetAllPositionsService = require('../../services/GetAllPositionsService');

const UpdatePositionsService = require('../../services/UpdatePositionsService');
const UpdateDependentsService = require('../../../dependents/services/UpdateDependentsService');

const positionsRepository = new PositionsRepository();
const dependentsRepository = new DependentsRepository();

class PositionsController {


  async createPositions(request, response) {
    const {
      positionName,
      hasMandate,

     
    } = request.body; 


    const createPostion = new CreateNewPositionsService(positionsRepository);


    const position = await createPostion.execute({
      positionName,
      hasMandate,
     
    });

    return response.json(position[0]);
  }

  async updatePositions(request, response) {
    const { id } = request.params;

    const payload = {
      id,
      ...request.body,      
    };

  
    const updatePositions = new UpdatePositionsService(positionsRepository);

    const positionUpdated = await updatePositions.execute(payload);


 


    return response.json(positionUpdated);
  }

  async deletePositions(request, response) {
    const { id } = request.params;

    const deletePositions = new DeletePositionsService(positionsRepository);

    await deletePositions.execute(id);

    return response.json({
      position: {
        id,
        deleted: true,
      },
    });
  }

  async getAllPositions(request, response) {
    const getAll = new GetAllPositionsService(positionsRepository);

    const positions = await getAll.execute();

    return response.json(positions);
  }

  async getOnePositions(request, response) {
    const { id } = request.params;

    const getOne = new GetOnePositionsService(positionsRepository);

    const position = await getOne.execute(id);
    return response.json(position);
  }
}

module.exports = PositionsController;
