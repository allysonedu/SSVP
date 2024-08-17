const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const DependentsController = require('../controller/DependentsController');

const dependentsRoutes = Router();

const dependentsController = new DependentsController();

dependentsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required('Name is required'),
      username: Joi.string().required('username is required'),
      created_at: Joi.string().required('created_at is required'),
      relationship: Joi.string().required('relationship is required'),
      occupation: Joi.string().required('occupation is required'),
    },
  }),
  dependentsController.createDependents
);

dependentsRoutes.get('/', dependentsController.getAllDependents);


dependentsRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('ID is require'),
    },
  }),
  dependentsController.getOneDependents
);

dependentsRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  dependentsController.updateDependents
);

dependentsRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  dependentsController.deleteDependents
);

dependentsRoutes.get('/:id', dependentsController.getOneDependents);

dependentsRoutes.put('/:id', dependentsController.updateDependents);

dependentsRoutes.delete('/:id', dependentsController.deleteDependents);


module.exports = dependentsRoutes;
