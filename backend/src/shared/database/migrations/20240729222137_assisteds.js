/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('assisteds', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.integer('age').notNullable();
    table.text('district').notNullable;
    table.boolean('maritalStatus').notNullable().defaultTo(false);
    table.text('profession').notNullable();
    table.text('whatsapp').notNullable();
    table.integer('secretary_id').unsigned();
    table.foreign('secretary_id').references('id').inTable('secretary');
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('assisteds');
};
