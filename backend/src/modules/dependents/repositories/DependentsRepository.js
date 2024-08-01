const connection = require('../../../shared/database/connection');

class DependentsRepository {
  async createDependents(payload) {
    return connection.transaction(async trx =>
      trx('dependents').insert(payload).returning('*')
    );
  }
}
module.exports = DependentsRepository;
