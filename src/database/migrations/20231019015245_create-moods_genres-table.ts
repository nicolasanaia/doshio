import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('moods_genres', (table: Knex.TableBuilder) => {
        table.increments('id').notNullable().unique();
        table.integer('mood_id').unsigned().references('id').inTable('moods').onDelete('CASCADE');
        table.string('mood_name').references('name').inTable('moods').onDelete('CASCADE');
        table.integer('genre_id').unsigned().references('id').inTable('genres').onDelete('CASCADE');
        table.string('genre_name').references('name').inTable('genres').onDelete('CASCADE');
        table.boolean('genre_active').references('active').inTable('genres').onDelete('CASCADE');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('moods_genres');
}

