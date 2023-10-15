import knex from 'knex';
import configs from './knexfile';
import { NODE_ENV } from '../config';

const config = configs[NODE_ENV || 'development'];

const db = knex(config);

export default db;