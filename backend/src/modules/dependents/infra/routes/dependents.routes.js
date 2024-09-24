const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const DependentsController = require('../controller/DependentsController');

const dependentsRoutes = Router();

const dependentsController = new DependentsController();

dependentsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      assisted_id: Joi.number().required('Assisteds ID is required'),
      name: Joi.string().required('Name is required'),
      age: Joi.number().required('age is required'),
      relationship: Joi.string().required('relationship is required'),
      
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
