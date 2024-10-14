const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const UsersController = require('../controllers/UsersController');

const {
  verifyIfEmailAlreadyExists,
} = require('../../middleware/users.middleware');
const assistedsRoutes = require('../../../assisteds/infra/routes/assisteds.routes');

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required('Name is required'),
      email: Joi.string().email().required('Email is required'),
      whatsapp: Joi.string(),
      password: Joi.string().min(6).required('Password is required'),
      username: Joi.string(),
      position_id: Joi.number(),
    },
  }),
  verifyIfEmailAlreadyExists,
  usersController.createUsers
);

usersRoutes.get('/', usersController.getAllUsers);

usersRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('ID is require'),
    },
  }),
  usersController.getOneUser
);

usersRoutes.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  usersController.updateUsers
);

usersRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required('Id is required'),
    },
  }),
  usersController.deleteUsers
);

module.exports = usersRoutes;
