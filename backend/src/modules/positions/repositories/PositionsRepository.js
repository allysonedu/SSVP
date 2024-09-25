const connection = require('../../../shared/database/connection');

class PositionsRepository {
  async createPositions(payload) {
   
     const [createdPositions] = await connection.transaction(async trx =>
       trx('positions').insert(payload).returning('*')
    );

    return createdPositions
  }

  async updatePositions(payload) {
    return connection('positions')
      .update(payload)
      .where({ id: payload.id })
      .returning('*');
  }

  async deletePositions(idPositions) {
    return connection('positions').del().where({ id: idPositions });
  }

  async getAllPositions() {
    return connection('positions');
  }

  async getOnePositions(idPositions) {
    return connection('positions')
    .where('id', '=', `${idPositions}`).first();
  }
}

module.exports = PositionsRepository;
