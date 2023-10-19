import { RecommendationsResponse } from "../models/response";
import AnilistService from "./anilist";

export default class RecommendationsService {
    anilist: AnilistService;

    constructor() {
        this.anilist = new AnilistService();
    }

    async getRecommendation(): Promise<RecommendationsResponse> {
        try {
            const recommendation = await this.anilist.getRecommendation();
            // if (!)
            console.log(recommendation);

            return new RecommendationsResponse(false, 'Successfully found recommendation', recommendation);
        } catch (error) {
            return new RecommendationsResponse(true, error.message);
        }
    }
}