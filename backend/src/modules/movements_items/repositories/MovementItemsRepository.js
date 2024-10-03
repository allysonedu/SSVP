const connection = require('../../../shared/database/connection');

class MovementItemsRepository {
  async createMovementItems(payload) {

    const [createdMovementItems] = await connection.transaction(async trx =>
      trx('movement_items').insert(payload).returning('*')
    );

    return createdMovementItems
  }

  async updateMovementItems(payload) {
    return connection.transaction(async (trx) => {
      await Promise.all(
        payload.map(element => {
          if (!element.id) {
            return trx('movement_items').insert(element).returning('*');
          } else {
            return trx('movement_items')
              .where({ id: element.id })
              .update(element);
          }
        })
      )
    }
    );
  }

  async deleteMovementItems(idsToDelete) {
    return connection('movement_items').whereIn("id", idsToDelete).del();
  }

  async getAllMovementItems(movement_id) {
    if (movement_id)
      return connection('movement_items').where({ movement_id: movement_id });

    return connection('movement_items')
  }

  async getOneMovementItems(idMovementItems) {
    return connection('movement_items')
      .where('id', '=', `${idMovementItems}`).first();
  }
}

module.exports = MovementItemsRepository;
