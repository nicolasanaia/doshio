import { Knex } from 'knex';
import path from 'path';

import { DATABASE, PASSWORD, USER_DB } from '../config';

interface IKnexConfig {
  [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      user: USER_DB,
      password: PASSWORD,
      database: DATABASE,
    },
    debug: true,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/migrations')
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      user: USER_DB,
      password: PASSWORD,
      database: DATABASE,
    },
    debug: true,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/migrations')
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      user: USER_DB,
      password: PASSWORD,
      database: DATABASE,
    },
    debug: true,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/migrations')
    }
  },
};

export default configs;