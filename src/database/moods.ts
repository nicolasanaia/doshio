import { IMood } from "../interfaces/moods";
import db from "./db";

export default class GenresDatabase {
    public table: string = 'moods';

    async getAllMoods(): Promise<IMood[]> {
        return await db.from(this.table).select('*');
    }
}