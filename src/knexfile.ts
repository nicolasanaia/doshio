import { Knex } from 'knex';
import path from 'path';

import { DATABASE, HOST, PASSWORD, USER_DB } from './config';

interface IKnexConfig {
  [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      host: HOST,
      user: USER_DB,
      password: PASSWORD,
      database: DATABASE,
    },
    debug: false,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/database/migrations')
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: HOST,
      user: USER_DB,
      password: PASSWORD,
      database: DATABASE,
    },
    debug: false,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/database/migrations')
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: HOST,
      user: USER_DB,
      password: PASSWORD,
      database: DATABASE,
    },
    debug: false,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/database/migrations')
    }
  },
};

export default configs;