import { IFilters } from "src/interfaces/filters";
import { RecommendationsResponse } from "../models/response";
import AnilistService from "./anilist";

export default class RecommendationsService {
    anilist: AnilistService;

    constructor() {
        this.anilist = new AnilistService();
    }

    async getRecommendation(filters: IFilters): Promise<RecommendationsResponse> {
        try {
            const recommendation = await this.anilist.getRecommendation(filters);

            return new RecommendationsResponse(false, 'Successfully found recommendation', recommendation);
        } catch (error) {
            return new RecommendationsResponse(true, error.message);
        }
    }
}