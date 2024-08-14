const connection = require('../../../shared/database/connection');

class DependentsRepository {
  async createDependents(payload) {
    return connection.transaction(async trx =>
      trx('dependents').insert(payload).returning('*')
    );
  }

  async getAllDependents() {
    return connection('dependents');
  }

  async getOneDependents(idDependents) {
    return connection('dependents').where({ id: idDependents }).first();
  }

  async updateDependents(payload) {
    return connection('dependents')
      .update(payload)
      .where({ id: payload.id })
      .returning('*');
  }

  async deleteDependents(idDependents) {
    return connection('dependents').del().where({ id: idDependents });
  }
}
module.exports = DependentsRepository;
