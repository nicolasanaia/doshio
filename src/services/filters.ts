import { QuestionsResponse } from "../models/response";
import QuestionsDatabase from "../database/questions";
import { IQuestion } from "src/interfaces/questions";

export default class QuestionsService {
    database: QuestionsDatabase;

    constructor() {
        this.database = new QuestionsDatabase();
    }

    async getQuestionsByMood(): Promise<QuestionsResponse> {
        try {
            // get in db questions answers equivalency
            const questions: IQuestion[] = await this.database.getQuestions();

            return new QuestionsResponse(false, 'Questions found successfully', questions)
        } catch (error) {
            return new QuestionsResponse(true, error.message);
        }
    }
}