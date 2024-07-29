/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('secretary', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
    table.text('whatsapp').notNullable();
    table.text('username').notNullable();
    table.integer('type_id').unsigned();
    table.foreign('type_id').references('id').inTable('type_users');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('secretary');
};
