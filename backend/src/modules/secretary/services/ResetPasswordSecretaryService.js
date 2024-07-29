const AppError = require('../../../shared/errors/AppError');

const { generateHash } = require('../../../shared/utils/encrypt');

class ResetPasswordSecretaryService {
  constructor(secretaryRepository) {
    this.secretaryRepository = secretaryRepository;
  }

  async execute(payload) {
    const { token, password } = payload;

    const secretary = await this.secretaryRepository.getTokenUser(token);

    if (!secretary) throw new AppError('Token not found');

    const passwordHashed = await generateHash(password);

    const data = {
      secretaryId: secretary.secretary_id,
      password: passwordHashed,
    };

    const result = await this.secretaryRepository.updatePasswordAndDeleteToken(
      data
    );
    return result;
  }
}
module.exports = ResetPasswordSecretaryService;
