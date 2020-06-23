import * as dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '..', '..', '.env');

dotenv.config({ path: envPath });

const env = {
  PORT: process.env.PORT || '3333',
  CLIENT: process.env.CLIENT || '',
};

export default env;
