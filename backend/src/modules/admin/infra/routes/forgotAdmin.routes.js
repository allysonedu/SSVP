const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const AdminController = require('../controllers/AdminController');

const forgotAdminRoutes = Router();

const adminController = new AdminController();

forgotAdminRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required('Email is required'),
    },
  }),
  adminController.forgotPasswordAdmin
);

module.exports = forgotAdminRoutes;
