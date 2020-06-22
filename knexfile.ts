import path from 'path';

const connectionPath = ['src', 'database', 'database.sqlite'];
const migrationsPath = ['src', 'database', 'migrations'];
const seedsPath = ['src', 'database', 'seeds'];

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, ...connectionPath),
  },
  migrations: {
    directory: path.resolve(__dirname, ...migrationsPath),
  },
  seeds: {
    directory: path.resolve(__dirname, ...seedsPath),
  },
  useNullAsDefault: true,
};
