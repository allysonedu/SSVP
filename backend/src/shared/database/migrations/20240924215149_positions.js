/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('positions', table => {
        table.increments('id').primary();
        table.text('positionName').notNullable();
        table.boolean('hasMandate').notNullable();
        
      });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('positions');
};
