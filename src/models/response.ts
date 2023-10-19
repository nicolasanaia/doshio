import { IMood } from "src/interfaces/moods";
import { IRecommendationAnilistResponse } from "../interfaces/anilist";
import { IGenre } from "../interfaces/genres";


export class Response{
    error: boolean;
    message: string;

    constructor(error: boolean, message: string) {
        this.error = error,
        this.message = message
    }
}

export class RecommendationsResponse extends Response {
    recommendation?: IRecommendationAnilistResponse;

    constructor(error: boolean, message: string, recommendation?: IRecommendationAnilistResponse) {
        super(error, message),
        this.recommendation = recommendation
    }
}

export class GenresResponse extends Response {
    genres?: IGenre | IGenre[];

    constructor(error: boolean, message: string, genres?: IGenre | IGenre[]) {
        super(error, message),
        this.genres = genres
    }
}

export class MoodsResponse extends Response {
    moods?: IMood | IMood[];

    constructor(error: boolean, message: string, moods?: IMood | IMood[]) {
        super(error, message),
        this.moods = moods
    }
}