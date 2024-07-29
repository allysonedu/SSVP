const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const AdminController = require('../controllers/AdminController');

const resetPasswordAdminRoutes = Router();

const adminController = new AdminController();

resetPasswordAdminRoutes.patch(
  '/:token',
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().min(6).required('Password is required'),
    },
    [Segments.PARAMS]: {
      token: Joi.string().min(6).required('Token is required'),
    },
  }),
  adminController.resetPasswordAdmin
);

module.exports = resetPasswordAdminRoutes;
