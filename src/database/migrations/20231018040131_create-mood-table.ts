import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('moods', (table: Knex.CreateTableBuilder) => {
        table.increments('id').notNullable().unique();
        table.string('name').notNullable().unique();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('moods');
}

