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

    return connection.transaction(async (trx) => {
      payload.forEach(async element => {

        if (element.id == 0) {
          trx('dependents').insert(element)
        } else {
          await trx('dependents')
            .update(element)
        }

      });

    })


  }

  async deleteDependents(idDependents) {
    return connection('dependents').del().where({ id: idDependents });
  }

}
module.exports = DependentsRepository;
