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
}