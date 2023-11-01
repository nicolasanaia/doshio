import { Body, Controller, Get, HttpCode, Post, Put } from "routing-controllers";

import GenresService from "../services/genres";
import { CreateGenreDTO, CreateGenresListDTO, GetGenreByNameDTO } from "../dtos/genres";
import { IGenre } from "../interfaces/genres";
import { ApiResponse } from "../interfaces/response";
import { GenresResponse } from "src/models/response";

@Controller('/genre')
export default class GenresController {
    service: GenresService;

    constructor() {
        this.service = new GenresService();
    }

    @Get('/find')
    @HttpCode(200)
    async getGenreByName(@Body() genreDTO: GetGenreByNameDTO): Promise<ApiResponse<GenresResponse>> {
        const response = await this.service.getGenreByName(genreDTO.name);

        return { data: response };
    }

    @Get('/find/all')
    @HttpCode(200)
    async getAll(): Promise<ApiResponse<GenresResponse>> {
        const response = await this.service.getAllGenres();

        return { data: response };
    }

    @Post('/create')
    @HttpCode(200)
    async createGenre(@Body() genreDTO: CreateGenreDTO): Promise<ApiResponse<GenresResponse>> {
        const response = await this.service.createGenre({
            name: genreDTO.name,
            active: genreDTO.active ?? true
        } as IGenre);

        return { data: response };
    }

    @Post('/create/list')
    @HttpCode(200)
    async createGenresList(@Body() genresDTO: CreateGenresListDTO): Promise<ApiResponse<GenresResponse>> {
        const genres: IGenre[] = genresDTO.genres.map(genre => {
            return {
                name: genre.name,
                active: genre.active ?? true
            }
        });
        console.log(genres)
        const response = await this.service.createGenresList(genres);

        return { data: response };
    }
}