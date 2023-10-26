import { IGenre } from "../interfaces/genres";
import GenresDatabase from "../database/genres";
import { GenresResponse } from "../models/response";

export default class GenresService {
    genresTable: GenresDatabase;

    constructor() {
        this.genresTable = new GenresDatabase();
    }

    async getGenreByName(genreName: string): Promise<GenresResponse> {
        try {
            const [ genre ] = await this.genresTable.getActiveGenreByName(genreName) as IGenre[];

            if (genre) {
                return new GenresResponse(false, 'Genre found successfully', genre);
            } else throw new Error('No genre was found');
        } catch (error) {
            return new GenresResponse(true, error.message);
        }
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
            const checkGenre = await this.genresTable.getGenreByName(genre.name);

            if (checkGenre) throw new Error(`Genre with name ${genre.name} already exists`);

            await this.genresTable.createGenre(genre);

            return new GenresResponse(false, 'Genre created successfully', genre);
        } catch (error) {
            return new GenresResponse(true, error.message);
        }
    }

    async createGenresList(genres: IGenre[]): Promise<GenresResponse> {
        const genresNotCreated: IGenre[] = [];

        try {
            for (const genre of genres) {
                const { error } = await this.createGenre(genre);

                if (error) genresNotCreated.push(genre);
            }

            if (genresNotCreated.length) throw new Error('Some genres couldn\'t be created');

            return new GenresResponse(false, 'Genres created successfully', genres);
        } catch (error) {
            return new GenresResponse(true, error.message, genresNotCreated.length > 0 ? genresNotCreated : undefined);
        }
    }
}