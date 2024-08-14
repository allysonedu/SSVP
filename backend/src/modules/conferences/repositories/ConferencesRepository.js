/**
 * Responsabilidade da repository é acessar o nosso banco de dados
 */

const connection = require('../../../shared/database/connection');

class ConferencesRepository {
  async checkConferencesEmail(email) {
    return connection('conferences').where({ email }).first();
  }

  async createConferences(payload) {
    return connection.transaction(
      async trx => trx('conferences').insert(payload).returning('*') // para estar criando o usuario
    );
  }

  async getAllConferences() {
    return connection('conferences'); // para pegar todos os usuarios
  }

  async getOneConferences(idConferences) {
    return connection('conferences').where({ id: idConferences }).first(); // para pegar um usuario pelo id
  }

  async updateConferences(payload) {
    return connection('conferences')
      .update(payload)
      .where({ id: payload.id })
      .returning('*'); // para retornar o usuario atualizado
  }

  async deleteConferences(idConferences) {
    return connection('conferences').del().where({ id: idConferences }); // para deletar um usuario pelo id
  }
}

module.exports = ConferencesRepository;
