/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('users_token', table => {
    table.increments('id').primary();
    table.text('token').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('secretary_id').unsigned();
    table.foreign('secretary_id').references('id').inTable('secretary');
    table.integer('users_id').unsigned();
    table.foreign('users_id').references('id').inTable('users');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users_token');
};
