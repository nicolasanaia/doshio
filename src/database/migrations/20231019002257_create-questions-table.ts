import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('questions', (table: Knex.TableBuilder) => {
        table.increments('id').notNullable().unique();
        table.text('question').notNullable();
        table.integer('represented_genre_id').unsigned().references('id').inTable('moods').onDelete('CASCADE');
        table.integer('alternative_genre_id').unsigned().references('id').inTable('moods').onDelete('CASCADE');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('questions');
}

