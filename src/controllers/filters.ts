import { Controller, Get, HttpCode } from "routing-controllers";

import FiltersService from "../services/filters";
import { ApiResponse } from "src/interfaces/response";
import { FiltersResponse } from "src/models/response";

@Controller('/build/filter')
export default class FiltersController {
    service: FiltersService;

    constructor() {
        this.service = new FiltersService();
    }

    @Get('/new')
    @HttpCode(200)
    async buildFilters(): Promise<ApiResponse<FiltersResponse>> {
        const response = await this.service.getQuestionsByMood();

        return { data: response };
    }
}