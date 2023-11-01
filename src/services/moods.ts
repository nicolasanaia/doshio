import { MoodsResponse } from "../models/response";
import MoodsDatabase from "../database/moods";
import { IMood } from "../interfaces/moods";

export default class MoodsService {
    moodsTable: MoodsDatabase;

    constructor() {
        this.moodsTable = new MoodsDatabase();
    }

    async getAllMoods(): Promise<MoodsResponse> {
        try {
            const moods: IMood[] = await this.moodsTable.getAllMoods();
            
            return new MoodsResponse(false, 'Moods found successfully', moods);
        } catch (error) {
           return new MoodsResponse(true, error.message);
        }
    }

    async createMood(moodName: string): Promise<MoodsResponse> {
        try {
            const [ checkMood ] = await this.moodsTable.getMoodByName(moodName);

            if (checkMood) throw new Error(`Mood with name ${moodName} already exists`);

            await this.moodsTable.createMood(moodName);

            return new MoodsResponse(false, `Mood with name ${moodName} created successfully`);
        } catch (error) {
            return new MoodsResponse(true, error.message);
        }
    }
}