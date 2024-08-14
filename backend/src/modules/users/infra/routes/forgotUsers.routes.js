const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const UsersController = require('../controllers/UsersController');

const forgotUsersRoutes = Router();

const usersController = new UsersController();

forgotUsersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required('Email is required'),
    },
  }),
  usersController.forgotPasswordUsers
);

module.exports = forgotUsersRoutes;
