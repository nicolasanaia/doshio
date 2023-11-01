import { Body, Controller, Get, HttpCode, Post } from "routing-controllers";

import MoodsService from "../services/moods";
import { ApiResponse } from "../interfaces/response";
import { MoodsResponse } from "../models/response";
import { CreateMoodDTO } from "../dtos/moods";

@Controller('/mood')
export default class MoodsController {
    service: MoodsService;

    constructor() {
        this.service = new MoodsService();
    }

    @Get('/find/all')
    @HttpCode(200)
    async getAllMoods(): Promise<ApiResponse<MoodsResponse>> {
        const response = await this.service.getAllMoods();

        return { data: response };
    }

    @Post('/create')
    @HttpCode(200)
    async createMood(@Body() moodDTO: CreateMoodDTO): Promise<ApiResponse<MoodsResponse>> {
        const moodName = moodDTO.name;
        const response = await this.service.createMood(moodName);

        return { data: response };
    }
}