const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const SecretaryController = require('../controllers/SecretaryController');

const resetPasswordSecretaryRoutes = Router();

const secretaryController = new SecretaryController();

resetPasswordSecretaryRoutes.patch(
  '/:token',
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().min(6).required('Password is required'),
    },
    [Segments.PARAMS]: {
      token: Joi.string().min(6).required('Token is required'),
    },
  }),
  secretaryController.resetPasswordSecretary
);
module.exports = resetPasswordSecretaryRoutes;
