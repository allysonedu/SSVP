/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('types_users').del();
  await knex('admin').del();

  const types = await knex('types_users')
    .insert([
      { description: 'admin' },
      { description: 'secretary' },
      { description: 'financial' },
    ])
    .returning('*');

  const adminIndex = types.find(it => it.description === 'admin');

  //senha admin -> 111111
  await knex('admin').insert([
    {
      name: 'Administrador',
      email: 'admin@admin.com',
      password: '$2b$08$bb.M2h6d6TyeYmCMkc8bo.Nc.3jHy63ApUDHWZ.c5iqGI7682Lcy.',
      whatsapp: '19999999999',
      username: ' admin ',
      type_id: adminIndex.id,
    },
  ]);
};
