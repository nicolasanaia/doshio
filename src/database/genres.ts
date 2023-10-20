import { IGenre } from "src/interfaces/genres";
import db from "./db";

export default class GenresDatabase {
    public table: string = 'genres';
    private genres = db.from(this.table);

    async getAllGenres(): Promise<IGenre[]> {
        return await this.genres.select('*');
    }

    async createGenre(genre: IGenre): Promise<void> {
        await this.genres.insert(genre);
    }
}