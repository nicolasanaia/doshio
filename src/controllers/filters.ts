import { Controller, Get, HttpCode } from "routing-controllers";

import FiltersService from "../services/filters";

@Controller('/build/filter')
export default class RecommendationsController {
    service: FiltersService;

    constructor() {
        this.service = new FiltersService();
    }

    // @Get('/questions')
    // @HttpCode(200)
    // async getQuestions() {
    //     const response = await this.service.getQuestions();

    //     return { data: response };
    // }
}