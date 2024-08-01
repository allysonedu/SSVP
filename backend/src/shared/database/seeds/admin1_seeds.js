/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('type_users').del();
  await knex('users').del();

  const types = await knex('type_users')
    .insert([
      { description: 'admin' },
      { description: 'secretary' },
      { description: 'financial' },
    ])
    .returning('*');

  const adminIndex = types.find(it => it.description === 'admin');

  //senha admin -> 111111
  await knex('users').insert([
    {
      name: 'Administrador',
      email: 'admin@admin.com',
      password: '$2b$08$mtH1J8SfCZ5qcikex4lGGeFwUagGPJHvA4Fd2XZ.F5o9Iwpbm8rpO',
      whatsapp: '19999999999',
      username: 'admin',
      type_id: adminIndex.id,
    },
  ]);
};
