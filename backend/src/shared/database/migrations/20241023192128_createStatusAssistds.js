/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable('assisteds', table => {
        table.text('status').notNullable().defaultTo('confirmado');
    });



};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable('assisteds', table => {
        table.dropColumn('status');

    });
};