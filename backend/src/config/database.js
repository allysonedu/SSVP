const { resolve } = require('path');

const migrationsDir = resolve(
  __dirname,
  '..',
  'shared',
  'database',
  'migrations'
);

const seedsDir = resolve(__dirname, '..', 'shared', 'database', 'seeds');
module.exports = {
  local: {
    client: process.env.DB_CLIENT,
    pool: {
      min: Number(process.env.DB_MIN_POOL),
      max: Number(process.env.DB_MAX_POOL),
    },
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
    },
    migrations: {
      directory: migrationsDir,
    },
    seeds: {
      directory: seedsDir,
    },
  },
  
  production: {
    client: 'pg', // ou 'mysql', dependendo do seu banco de dados
    connection: {
      host: "db",
      user: "admin",
      password: "123456",
      database: "ssvp"
    },
    migrations: {
      directory: migrationsDir,
    },
    seeds: {
      directory: seedsDir,
    },
  }
};
