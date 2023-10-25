import { IGenre } from "src/interfaces/genres";
import db from "./db";

export default class GenresDatabase {
    public table: string = 'genres';

    async getAllGenres(): Promise<IGenre[]> {
        return await db.from(this.table).select('*');
    }

    async createGenre(genre: IGenre): Promise<void> {
        await db.from(this.table).insert(genre);
    }
}