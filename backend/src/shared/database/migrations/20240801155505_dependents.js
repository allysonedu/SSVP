/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('dependents', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.date('created_at').notNullable().defaultTo(knex.fn.now());
    table.text('relationship').notNullable();
    table.text('occupation').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('dependents');
};
