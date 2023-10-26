import { IGenre } from "src/interfaces/genres";
import db from "./db";

export default class GenresDatabase {
    table: string = 'genres';

    async getGenreByName(name: string): Promise<IGenre[]> {
        return await db<IGenre>(this.table)
            .select('*')
            .where('name', name);
    }

    async getActiveGenreByName(name: string): Promise<IGenre[]> {
        return await db<IGenre>(this.table)
            .select('*')
            .where('name', name)
            .andWhere('active', true);
    }

    async getAllGenres(): Promise<IGenre[]> {
        return await db<IGenre>(this.table).select('*');
    }

    async createGenre(genre: IGenre): Promise<void> {
        await db<IGenre>(this.table).insert(genre);
    }
}