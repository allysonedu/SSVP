const AdminRepository = require('../repositories/adminRepository');

const AppError = require('../../../shared/errors/AppError');

const adminRepository = new AdminRepository();

module.exports = {
  async verifyIfEmailAlreadyExists(request, response, next) {
    const { email } = request.body;

    const emailExists = await adminRepository.checkAdminEmail(email);
    if (emailExists) throw new AppError('Email already exists', 401);

    next();
  },
};
