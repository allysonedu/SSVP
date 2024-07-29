/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('type_users', table => {
    table.increments('id').primary();
    table.text('description').notNullable();
    table.integer('admin_id').unsigned();
    table.foreign('admin_id').references('id').inTable('admin');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('type_users');
};
