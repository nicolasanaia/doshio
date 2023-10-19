import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('genres', (table: Knex.TableBuilder) => {
            table.increments('id').notNullable().unique();
            table.string('name').notNullable().unique();
            table.boolean('active').notNullable().unique();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('genres');
}

