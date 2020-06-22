import Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  await knex('users').insert([
    {
      name: 'Andre',
      email: 'andre@gmail.com',
      password: '1234',
    },
    {
      name: 'Lucy',
      email: 'lucy@gmail.com',
      password: '1234',
    },
    {
      name: 'Sandra',
      email: 'sandra@gmail.com',
      password: '1234',
    },
  ]);
}
