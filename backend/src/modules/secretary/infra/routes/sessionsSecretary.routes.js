const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const SessionsSecreryController = require('../controllers/SessionsSecreryController');

const sessionsSecretaryRoutes = Router();

const sessionsSecretaryController = new SessionsSecreryController();

sessionsSecretaryRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required('Email is required'),
      password: Joi.string().min(6).required('Password is required'),
    },
  }),
  sessionsSecretaryController.login
);

module.exports = sessionsSecretaryRoutes;
