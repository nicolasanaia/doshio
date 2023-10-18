import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('genres', (table: Knex.TableBuilder) => {
            table.increments('id').notNullable().unique();
            table.string('name').notNullable();
            table.boolean('active').defaultTo(true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('genres');
}

