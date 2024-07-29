const AppError = require('../../../shared/errors/AppError');

const { generateHash } = require('../../../shared/utils/encrypt');

class ResetPasswordAdminService {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }

  async execute(payload) {
    const { token, password } = payload;

    const admin = await this.adminRepository.getTokenUser(token);
    if (!admin) throw new AppError('admin not found');

    const passwordHashed = await generateHash(password);

    const data = {
      adminId: admin.admin_id,
      password: passwordHashed,
    };

    const result = await this.adminRepository.updatePasswordAndDeleteToken(
      data
    );
    return result;
  }
}

module.exports = ResetPasswordAdminService;
