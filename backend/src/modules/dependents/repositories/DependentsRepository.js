const connection = require('../../../shared/database/connection');

class DependentsRepository {
  async createDependents(payload) {
    return connection.transaction(async trx =>
      trx('dependents').insert(payload)
        .onConflict('id') // Especifica o campo que será utilizado para verificar conflito (o 'id')
        .merge()          // Faz o update dos valores se já existir um registro com esse 'id'
        .returning('*')
    );
  }


  async getAllDependents(assisted_id) {
    if (assisted_id)
      return connection('dependents').where({ assisted_id: assisted_id });

    return connection('dependents');
  }

  async getOneDependents(idDependents) {
    return connection('dependents').where({ id: idDependents }).first();
  }

  async updateDependents(payload) {

    return connection.transaction(async (trx) => {
      await Promise.all(
        payload.map(element => {
          if (!element.id) {
            return trx('dependents').insert(element).returning('*');
          } else {
            return trx('dependents')
              .where({ id: element.id })
              .update(element);
          }
        })
      )
    }
    );


  }

  async deleteDependents(idDependents) {
    return connection('dependents').del().where({ id: idDependents });
  }

}
module.exports = DependentsRepository;
