import { Controller, Get, HttpCode } from "routing-controllers";

import RecommendationsService from "../services/recommendations";
import { ApiResponse } from "../interfaces/response";
import { RecommendationsResponse } from "src/models/response";

@Controller('/recommendation')
export default class RecommendationsController {
    service: RecommendationsService;

    constructor() {
        this.service = new RecommendationsService();
    }

    @Get('/new')
    @HttpCode(200)
    async getRecommendation(): Promise<ApiResponse<RecommendationsResponse>> {
        const response = await this.service.getRecommendation();

        return { data: response };
    }
}