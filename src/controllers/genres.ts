import { Controller, Get, HttpCode } from "routing-controllers";
import { GenresService } from "../services/genres";

@Controller('/genre')
export class RecommendationsController {
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
}