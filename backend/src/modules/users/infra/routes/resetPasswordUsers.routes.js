const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const UsersController = require('../controllers/UsersController');

const resetPasswordUsersRoutes = Router();

const usersController = new UsersController();

resetPasswordUsersRoutes.patch(
  '/:token',
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().min(6).required('Password is required'),
    },
    [Segments.PARAMS]: {
      token: Joi.string().min(6).required('Token is required'),
    },
  }),
  usersController.resetPasswordUsers
);

module.exports = resetPasswordUsersRoutes;
