const jwt = require('jsonwebtoken');

const AppError = require('../../../shared/errors/AppError');

const { compare } = require('../../../shared/utils/encrypt');

class SessionsService {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }

  async execute(payload) {
    const { email, password } = payload;

    const admin = await this.adminRepository.checkAdminEmail(email);
    if (!admin) throw new AppError('admin not found');

    await compare(password, admin.password);

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    delete admin.password;

    return {
      token,
      admin,
    };
  }
}

module.exports = SessionsService;
