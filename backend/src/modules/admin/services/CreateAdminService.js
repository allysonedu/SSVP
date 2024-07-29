const { generateHash } = require('../../../shared/utils/encrypt');

class CreateAdminService {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }

  async execute(payload) {
    const { password } = payload;

    Object.assign(payload, {
      password: await generateHash(password),
    });

    const admin = await this.adminRepository.createAdmin(payload);

    return admin;
  }
}

module.exports = CreateAdminService;
