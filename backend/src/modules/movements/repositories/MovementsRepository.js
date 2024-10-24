const connection = require('../../../shared/database/connection');

class MovementsRepository {
  async createMovements(payload) {
   
     const [createdMovements] = await connection.transaction(async trx =>
       trx('movements').insert(payload).returning('*')
    );

    return createdMovements
  }

  async updateMovements(payload) {
    return connection('movements')
      .update(payload)
      .where({ id: payload.id })
      .returning('*')
  }

  async deleteMovements(idMovements) {
    return connection('movements').del().where({ id: idMovements });
  }

  async getAllMovements() {
    return connection('movements')
    .join('assisteds', 'assisteds.id', '=', 'movements.assisted_id')
    .join('conferences', 'conferences.id', '=', 'movements.conference_id')
    .select('assisteds.name as assisted_name','conferences.name as conference_name', 'movements.*');;
  }

  async getOneMovements(idMovements) {
    return connection('movements')
    .where('movements.id', '=', `${idMovements}`).first();
  }
}

module.exports = MovementsRepository;
