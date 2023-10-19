import { IMood } from "../interfaces/moods";
import db from "./db";

export class MoodsTable {
    public table: string = 'moods';
    private get = db.from(this.table);

    async getAllMoods(): Promise<IMood[]> {
        return await this.get.select('*');
    }
}