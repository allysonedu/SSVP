/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('conferences', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('cep', 8).notNullable();
    table.text('city').notNullable();
    table.text('state').notNullable();
    table.text('username').notNullable();
    table.text('email').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('conferences');
};
