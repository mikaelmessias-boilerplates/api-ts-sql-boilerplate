import path from 'path';
import env from './src/utils/dotenv';

const connectionPath = ['src', 'database', 'database.sqlite'];
const migrationsPath = ['src', 'database', 'migrations'];
const seedsPath = ['src', 'database', 'seeds'];

module.exports = {
  client: env.CLIENT,
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
