export class RecommendationsResponse<T> {
    error: boolean;
    message: string;
    recommendation?: T;

    constructor(error: boolean, message: string, recommendation?: T) {
        this.error = error,
        this.message = message,
        this.recommendation = recommendation
    }
}