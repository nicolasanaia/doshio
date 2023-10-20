import { IGenre } from "../interfaces/genres";
import GenresDatabase from "../database/genres";
import { GenresResponse } from "../models/response";

export default class GenresService {
    genresTable: GenresDatabase;

    constructor() {
        this.genresTable = new GenresDatabase();
    }

    async getAllGenres(): Promise<GenresResponse> {
        try {
            const genres: IGenre[] = await this.genresTable.getAllGenres();

            return new GenresResponse(false, 'Genres found successfully', genres);
        } catch (error) {
            return new GenresResponse(true, error.message);
        }
    }

    async createGenre(genre: IGenre): Promise<GenresResponse> {
        try {
            await this.genresTable.createGenre(genre);

            return new GenresResponse(false, 'Genres created successfully', genre);
        } catch (error) {
            return new GenresResponse(true, error.message);
        }
    }
}