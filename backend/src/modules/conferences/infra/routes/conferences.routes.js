/**
 * POST - criação
 * PUT - alteração ou atualização (Varios dados de um registro)
 * PATCH - alteração ou atualização (Um dado de um registro)
 * GET - listagem
 * DELETE - remoção
 *
 * CRUD - Create, Read, Update, Delete
 *
 * As rotas tem a responsabilidade de roteamento das requisições (Entrada e Saida)
 */

const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const ConferencesController = require('../controller/ConferencesController');

const {
  verifyIfEmailAlreadyExists,
} = require('../../middleware/conferences.middleware');

const conferencesRoutes = Router();

const conferencesController = new ConferencesController();

conferencesRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required('Name is required'),
      email: Joi.string().email(),
      address: Joi.string(),
      address_number: Joi.string(),
      neighborhood: Joi.string(),
      zip_code: Joi.string(),
      address_complement: Joi.string().optional(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      tel: Joi.string(),
    },
  }),
  verifyIfEmailAlreadyExists,
  conferencesController.createConferences
);

conferencesRoutes.get('/', conferencesController.getAllConferences);

conferencesRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  conferencesController.updateConferences
);

conferencesRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('ID is require'),
    },
  }),
  conferencesController.getOneConferences
);

conferencesRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  conferencesController.deleteConferences
);

module.exports = conferencesRoutes;
