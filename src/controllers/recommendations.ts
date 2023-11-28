import { Body, Controller, Get, HttpCode } from "routing-controllers";

import RecommendationsService from "../services/recommendations";
import { ApiResponse } from "../interfaces/response";
import { RecommendationsResponse } from "../models/response";
import { FiltersDTO } from "../dtos/filters";
import { IFilters } from "../interfaces/filters";

@Controller('/recommendation')
export default class RecommendationsController {
    service: RecommendationsService;

    constructor() {
        this.service = new RecommendationsService();
    }

    @Get('/new')
    @HttpCode(200)
    async getRecommendation(@Body() filtersDTO: FiltersDTO): Promise<ApiResponse<RecommendationsResponse>> {
        const filters: IFilters = {
            genres: filtersDTO.genres,
            format: filtersDTO.format ?? 'ANIME',
            minScore: filtersDTO.minScore ?? 80
        };

        const response = await this.service.getRecommendation(filters);

        return { data: response };
    }
}