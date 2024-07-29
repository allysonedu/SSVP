const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const AdminController = require('../controllers/AdminController');

const {
  verifyIfEmailAlreadyExists,
} = require('../../middleware/admin.middleware');

const adminRoutes = Router();

const adminController = new AdminController();

adminRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required('Name is required'),
      email: Joi.string().email().required('Email is required'),
      whatsapp: Joi.string().required('Whatsapp is required'),
      password: Joi.string().min(6).required('Password is required'),
      username: Joi.string().required('username is required'),
    },
  }),
  verifyIfEmailAlreadyExists,
  adminController.createAdmin
);

adminRoutes.get('/', adminController.getAllAdmin);

adminRoutes.put('/', adminController.updateAdmin);

adminRoutes.delete('/', adminController.deleteAdmin);

module.exports = adminRoutes;
