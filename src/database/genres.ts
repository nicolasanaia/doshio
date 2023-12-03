import { TABLES } from "../constants/tables";
import { IGenre } from "../interfaces/genres";
import db from "./db";

export default class GenresDatabase {
    public tableName: string = TABLES.GENRES;

    async getGenreByName(name: string): Promise<IGenre[]> {
        return await db<IGenre>(this.tableName)
            .select('*')
            .where('name', name);
    }

    async getActiveGenreByName(name: string): Promise<IGenre[]> {
        return await db<IGenre>(this.tableName)
            .select('*')
            .where('name', name)
            .andWhere('active', true);
    }

    async getAllGenres(): Promise<IGenre[]> {
        return await db<IGenre>(this.tableName)
            .select('*');
    }

    async createGenre(genre: IGenre): Promise<void> {
        await db<IGenre>(this.tableName)
            .insert(genre);
    }
}