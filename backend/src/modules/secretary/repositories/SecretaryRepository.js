const connection = require('../../../shared/database/connection');

class SecretaryRepository {
  async checkSecretaryEmail(email) {
    return connection('secretary').where({ email }).first();
  }

  async createSecretary(payload) {
    return connection.transaction(async trx =>
      trx('secretary').insert(payload).returning('*')
    );
  }

  async saveTokenInDb(payload) {
    return connection.transaction(async trx =>
      trx('users_token').insert(payload).returning('token')
    );
  }

  async getTokenUser(token) {
    return connection('users_token')
      .join('secretary', 'secretary.id', 'users_token.secretary_id')
      .where({
        token,
      })
      .first();
  }
  async updatePasswordAndDeleteToken(payload) {
    return connection.transaction(async trx => {
      await trx('secretary')
        .update({
          password: payload.password,
        })
        .where({
          id: payload.secretaryId,
        });
      await trx('users_token').del().where({
        secretary_id: payload.secretaryId,
      });
    });
  }

  async getuserById(secretaryId) {
    return connection('users').where({ id: secretaryId }).first();
  }
}

module.exports = SecretaryRepository;
