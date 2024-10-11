/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //await knex('positions').del()
  await knex('positions').insert([
    {
      positionName: "Presidente",
      hasMandate: false
    },
    {
      positionName: "Tesoureiro",
      hasMandate: false
    },
    {
      positionName: "Secretario(a)",
      hasMandate: false
    },
  ]);
};
