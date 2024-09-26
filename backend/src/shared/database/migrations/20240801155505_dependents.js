/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('dependents', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('relationship').notNullable();
    table.text('CPF').nullable();
    table.date('birth_date').nullable();
    table.integer('assisted_id').unsigned().notNullable(); // Coluna para a chave estrangeira
    table
      .foreign('assisted_id')
      .references('id')
      .inTable('assisteds')
      .onDelete('CASCADE');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('dependents');
};
