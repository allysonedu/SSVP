const connection = require('../../../shared/database/connection');

class AssistedsRepository {
  async createAssisteds(payload) {
   
     const [createdAssisteds] = await connection.transaction(async trx =>
       trx('assisteds').insert(payload).returning('*')
    );

    return createdAssisteds
  }

  async updateAssisteds(payload) {
    return connection('assisteds')
      .update(payload)
      .where({ id: payload.id })
      .returning('*');
  }

  async deleteAssisteds(idAssisteds) {
    return connection('assisteds').del().where({ id: idAssisteds });
  }

  async getAllAssisteds() {
    return connection('assisteds');
  }

  async getOneAssisteds(idAssisteds) {
    return connection('assisteds').where({ id: idAssisteds }).first();
  }
}

module.exports = AssistedsRepository;
