const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const PositionsController = require('../controllers/PositionsController');

const positionsRoutes = Router();

const positionsController = new PositionsController();

positionsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      positionName: Joi.string().required('O nome do cargo is required'),
      hasMandate: Joi.bool().required('É necessario informar se o cargo possui mandato'),

    },
  }),

  positionsController.createPositions
);

positionsRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  positionsController.updatePositions
);

positionsRoutes.get('/', positionsController.getAllPositions);

positionsRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  positionsController.deletePositions
);

positionsRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('ID is require'),
    },
  }),
  positionsController.getOnePositions
);

module.exports = positionsRoutes;
