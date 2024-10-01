/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.alterTable('users', table => {
    table.integer('conference_id').unsigned();
    table.integer('position_id').unsigned();
    table.foreign('conference_id').references('id').inTable('conferences');
    table.foreign('position_id').references('id').inTable('positions');
    
  });


  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('users', table => {
        table.dropColumn('conference_id');
        table.dropColumn('position_id');
      });
};
