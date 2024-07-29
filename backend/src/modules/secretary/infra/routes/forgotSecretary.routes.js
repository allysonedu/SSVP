const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const SecretaryController = require('../controllers/SecretaryController');

const forgotSecretaryRoutes = Router();

const secretaryController = new SecretaryController();

forgotSecretaryRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required('Email is required'),
    },
  }),
  secretaryController.forgotPasswordSecretary
);

module.exports = forgotSecretaryRoutes;
