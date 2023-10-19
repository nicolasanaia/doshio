import { Controller, Get, HttpCode } from "routing-controllers";

import RecommendationsService from "../services/recommendations";

@Controller('/recommendation')
export default class RecommendationsController {
    service: RecommendationsService;

    constructor() {
        this.service = new RecommendationsService();
    }

    @Get('/new')
    @HttpCode(200)
    async getRecommendation() {
        const response = await this.service.getRecommendation();

        return { data: response };
    }
}