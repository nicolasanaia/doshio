import { IMood } from "../interfaces/moods";
import db from "./db";

export default class GenresDatabase {
    public table: string = 'moods';

    async getAllMoods(): Promise<IMood[]> {
        return await db<IMood>(this.table)
            .select('*');
    }

    async getMoodByName(name: string): Promise<IMood[]> {
        return await db<IMood>(this.table)
            .select('*')
            .where('name', name);
    }

    async createMood(moodName: string): Promise<void> {
        await db<IMood>(this.table)
            .insert({
                name: moodName
            });
    }
}