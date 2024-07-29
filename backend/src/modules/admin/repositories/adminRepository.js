const connection = require('../../../shared/database/connection');

class AdminRepository {
  async checkAdminEmail(email) {
    return connection('admin').where({ email }).first();
  }
  async createAdmin(payload) {
    return connection.transaction(async trx =>
      trx('admin').insert(payload).returning('*')
    );
  }

  async saveTokenInDb(payload) {
    return connection.transaction(async trx =>
      trx('users_token').insert(payload).returning('token')
    );
  }

  async getTokenUser(token) {
    return connection('users_token')
      .join('admin', 'admin.id', 'users_token.admin_id')
      .where({
        token,
      })
      .first();
  }

  async updatePasswordAndDeleteToken(payload) {
    return connection.transaction(async trx => {
      await trx('admin')
        .update({
          password: payload.password,
        })
        .where({
          id: payload.adminId,
        });

      await trx('users_token').del().where({
        admin_id: payload.adminId,
      });
    });
  }

  async getPersonById(adminId) {
    return connection('admin').where({ id: adminId }).first();
  }
}

module.exports = AdminRepository;
