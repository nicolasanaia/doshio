import { Body, Controller, Get, HttpCode, Post } from "routing-controllers";

import GenresService from "../services/genres";
import { CreateGenreDTO } from "../dtos/genres";

@Controller('/genre')
export default class RecommendationsController {
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
        console.log('chegou no controller')
        const response = await this.service.createGenre({
            name: genreDTO.name,
        });

        return { data: response };
    }
}