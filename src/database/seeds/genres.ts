import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('genres').del();

    await knex('genres').insert([
        { id: 1, name: 'Action', active: true },
        { id: 2, name: 'Adventure', active: true },
        { id: 3, name: 'Comedy', active: true },
        { id: 4, name: 'Drama', active: true },
        { id: 5, name: 'Ecchi', active: true },
        { id: 6, name: 'Fantasy', active: true },
        { id: 7, name: 'Horror', active: true },
        { id: 8, name: 'Mahou Shoujo', active: true },
        { id: 9, name: 'Mecha', active: true },
        { id: 10, name: 'Music', active: true },
        { id: 11, name: 'Mystery', active: true },
        { id: 12, name: 'Psychological', active: true },
        { id: 13, name: 'Romance', active: true },
        { id: 14, name: 'Sci-Fi', active: true },
        { id: 15, name: 'Slice of Life', active: true },
        { id: 16, name: 'Sports', active: true },
        { id: 17, name: 'Supernatural', active: true },
        { id: 18, name: 'Thriller', active: true },
    ]);
};
