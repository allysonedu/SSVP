const { table } = require('../connection');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('helping_hands', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('cnpj').nullable();
    table.text('tel').notNullable();
    table.text('address').notNullable;
    table.text('address_number').notNullable;
    table.text('neighborhood').notNullable;
    table.text('zip_code').notNullable;
    table.text('address_complement').notNullable;
    table.text('city').notNullable;
    table.text('state').notNullable;
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
