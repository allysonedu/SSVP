const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const AssistedsController = require('../controllers/AssistedsController');

const assistedsRoutes = Router();

const assistedsController = new AssistedsController();

assistedsRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required('Name is required'),
      age: Joi.number().required('Age is required'),
      whatsapp: Joi.string().required('Whatsapp is required'),
      profession: Joi.string().required('profession is required'),
      district: Joi.string().required('district is required'),
      cpf: Joi.string().required('district is required'),
      Case_report: Joi.string().required('district is required'),
      family_income: Joi.string().required('district is required'),
      explain: Joi.string().required('district is required'),
      Spouse: Joi.string().required('district is required'),
      home: Joi.boolean(),
      maritalStatus: Joi.boolean(),
    },
  }),
  assistedsController.createAssisteds
);

assistedsRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  assistedsController.updateAssisteds
);

assistedsRoutes.get('/', assistedsController.getAllAssisteds);

assistedsRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  assistedsController.deleteAssisteds
);

assistedsRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('ID is require'),
    },
  }),
  assistedsController.getOneAssisteds
);

module.exports = assistedsRoutes;
