import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
  HOST,
  USER_DB,
  PASSWORD,
  DATABASE,
  PORT,
  NODE_ENV
} = process.env;