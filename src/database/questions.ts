import { IQuestion } from "src/interfaces/questions";
import { TABLES } from "../constants/tables";
import db from "./db";

export default class QuestionsDatabase {
    public tableName: string = TABLES.QUESTIONS;

    async getQuestions(referenceGenreId: number): Promise<IQuestion[]> {
        return await db<IQuestion>(this.tableName)
            .select('*')
            .where('represented_genre_id', referenceGenreId)
            .orWhere('alternative_genre_id', referenceGenreId);
    }
}