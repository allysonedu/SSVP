return knex.schema.createTable('assisteds', table => {
  table.increments('id').primary();
  table.text('name').notNullable();
  table.integer('age').notNullable();
  table.text('district').notNullable;
  table.boolean('maritalStatus').notNullable().defaultTo(false);
  table.text('profession').notNullable();
  table.text('whatsapp').notNullable();
  table.text('cpf').notNullable();
  table.text('cpf').notNullable();
  table.text('Case_report');
  table.boolean('home').notNullable().defaultTo(false);
  table.text('family_income').notNullable();
  table.text('explain');
  table.text('Spouse');
});
