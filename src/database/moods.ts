import { TABLES } from "../constants/tables";
import { IMood } from "../interfaces/moods";
import db from "./db";

export default class MoodsDatabase {
    public tableName: string = TABLES.MOODS;

    async getAllMoods(): Promise<IMood[]> {
        return await db<IMood>(this.tableName)
            .select('*');
    }

    async getMoodByName(name: string): Promise<IMood[]> {
        return await db<IMood>(this.tableName)
            .select('*')
            .where('name', name);
    }

    async createMood(moodName: string): Promise<void> {
        await db<IMood>(this.tableName)
            .insert({
                name: moodName
            });
    }
}