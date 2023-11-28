import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('moods').del();

    await knex('moods').insert([
        { id: 1, name: 'Happy' },
        { id: 2, name: 'Sad' },
        { id: 3, name: 'Bored' },
        { id: 4, name: 'Angry' },
        { id: 5, name: 'Motivated' },
    ]);
};
