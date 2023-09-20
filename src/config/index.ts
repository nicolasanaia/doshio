import dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';
const envFile = `.env.${environment}.local`;

dotenv.config({ path: envFile });