import { Body, Controller, Get, HttpCode, Post } from "routing-controllers";

import GenresService from "../services/genres";
import { CreateGenreDTO } from "../dtos/genres";
import { IGenre } from "../interfaces/genres";

@Controller('/genre')
export default class GenresController {
    service: GenresService;

    constructor() {
        this.service = new GenresService();
    }

    @Get('/find/all')
    @HttpCode(200)
    async getAll() {
        const response = await this.service.getAllGenres();

        return { data: response };
    }

    @Post('/create')
    @HttpCode(200)
    async createGenre(@Body() genreDTO: CreateGenreDTO) {
        console.log('chegou no controller', genreDTO)
        const response = await this.service.createGenre({
            name: genreDTO.name,
            active: genreDTO.active
        } as IGenre);

        return { data: response };
    }
}