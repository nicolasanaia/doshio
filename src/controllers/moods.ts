import { Controller, Get, HttpCode } from "routing-controllers";

import MoodsService from "../services/moods";

@Controller('/mood')
export default class MoodsController {
    service: MoodsService;

    constructor() {
        this.service = new MoodsService();
    }

    @Get('/find/all')
    @HttpCode(200)
    async getAllMoods() {
        const response = await this.service.getAllMoods();

        return { data: response };
    }
}