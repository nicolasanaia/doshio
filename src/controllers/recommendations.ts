import { Controller, Get, HttpCode, Post } from "routing-controllers";

import { RecommendationsService } from "../services/recommendations";

@Controller('/recommendation')
export class RecommendationsController {
    service: RecommendationsService;

    constructor() {
        this.service = new RecommendationsService();
    }

    @Post('/new')
    @HttpCode(200)
    async getRecommendation() {
        const response = this.service.getRecommendation();

        return { data: response };
    }
}