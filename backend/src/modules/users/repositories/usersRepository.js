const connection = require('../../../shared/database/connection');

class UsersRepository {
  async checkUsersEmail(email) {
    return connection('users').where({ email }).first();
  }
  async createUsers(payload) {
    return connection.transaction(async trx =>
      trx('users').insert(payload).returning('*')
    );
  }

  async saveTokenInDb(payload) {
    return connection.transaction(async trx =>
      trx('users_token').insert(payload).returning('token')
    );
  }

  async getTokenUser(token) {
    return connection('users_token')
      .join('users', 'users.id', 'users_token.users_id')
      .where({
        token,
      })
      .first();
  }

  async updatePasswordAndDeleteToken(payload) {
    return connection.transaction(async trx => {
      await trx('users')
        .update({
          password: payload.password,
        })
        .where({
          id: payload.usersId,
        });

      await trx('users_token').del().where({
        users_id: payload.usersId,
      });
    });
  }

  async getPersonById(usersId) {
    return connection('users').where({ id: usersId }).first();
  }
}

module.exports = UsersRepository;
