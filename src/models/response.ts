import { IMood } from "src/interfaces/moods";
import { IRecommendationAnilist } from "../interfaces/anilist";
import { IGenre } from "../interfaces/genres";
import { IFilters } from "src/interfaces/filters";
import { IQuestion } from "src/interfaces/questions";


export class Response{
    error: boolean;
    message: string;

    constructor(error: boolean, message: string) {
        this.error = error,
        this.message = message
    }
}

export class RecommendationsResponse extends Response {
    recommendation?: IRecommendationAnilist;

    constructor(error: boolean, message: string, recommendation?: IRecommendationAnilist) {
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

export class FiltersResponse extends Response {
    filters?: IFilters

    constructor(error: boolean, message: string, filters?: IFilters) {
        super(error, message),
        this.filters = filters
    }
}

export class QuestionsResponse extends Response {
    questions?: IQuestion[];

    constructor(error: boolean, message: string, questions?: IQuestion[]) {
        super(error, message),
        this.questions = questions
    }
}