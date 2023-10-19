import { Controller, Get, HttpCode } from "routing-controllers";

import MoodsService from "../services/moods";

@Controller('/build/filter')
export default class RecommendationsController {
    service: MoodsService;

    constructor() {
        this.service = new MoodsService();
    }

    @Get('/mood/all')
    @HttpCode(200)
    async getAllMoods() {
        const response = await this.service.getAllMoods();

        return { data: response };
    }
}