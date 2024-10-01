/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('conferences', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('tel').notNullable();
    table.text('address').notNullable;
    table.text('address_number').notNullable;
    table.text('neighborhood').notNullable;
    table.text('zip_code').notNullable;
    table.text('address_complement').notNullable;
    table.text('city').notNullable;
    table.text('state').notNullable;
    table.text('country').notNullable;
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
