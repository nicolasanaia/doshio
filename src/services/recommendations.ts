import { RecommendationsResponse } from "../models/response";

export class RecommendationsService {
    async getRecommendation<T>(): Promise<RecommendationsResponse<T>> {
        try {
            
            
            return new RecommendationsResponse(false, 'Successfully found recommendation');
        } catch (error: any) {
            return new RecommendationsResponse(true, error.message);
        }
    }
}