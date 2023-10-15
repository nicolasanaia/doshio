import { IRecommendationAnilistResponse } from "../interfaces/anilist";
import { IGenre } from "../interfaces/genres";

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

export class GenresResponse {
    error: boolean;
    message: string;
    genres?: IGenre | IGenre[];

    constructor(error: boolean, message: string, genres?: IGenre | IGenre[]) {
        this.error = error,
        this.message = message,
        this.genres = genres
    }
}