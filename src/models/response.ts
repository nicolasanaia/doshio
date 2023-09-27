import { IRecommendationAnilistResponse } from "../interfaces/anilist";

export class RecommendationsResponse {
    error: boolean;
    message: string;
    recommendation?: IRecommendationAnilistResponse;

    constructor(error: boolean, message: string, recommendation?: IRecommendationAnilistResponse) {
        this.error = error,
        this.message = message,
        this.recommendation = recommendation
    }
}