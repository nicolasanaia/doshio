import { Controller, Get, HttpCode } from "routing-controllers";

import { FiltersService } from "../services/filters";

@Controller('/build/filter')
export class RecommendationsController {
    service: FiltersService;

    constructor() {
        this.service = new FiltersService();
    }

    // @Get('/mood')
    // @HttpCode(200)
    // async getMood() {
    //     const response = await this.service.getMood();

    //     return { data: response };
    // }

    // @Get('/questions')
    // @HttpCode(200)
    // async getQuestions() {
    //     const response = await this.service.getQuestions();

    //     return { data: response };
    // }
}