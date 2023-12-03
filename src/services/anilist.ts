import axios from "axios";

import { URL } from "../constants/url"
import { IRecommendationAnilist } from "../interfaces/anilist";
import { IFilters } from "../interfaces/filters";

export default class AnilistService {
    async getRecommendation(filters: IFilters): Promise<IRecommendationAnilist> {
        try {
            const graphqlQuery = `
                query ($page: Int, $minScore: Int, $genre: [String], $format: MediaType) {
                    Page(page: $page, perPage: 1) {
                    media(type: $format, isAdult: false, averageScore_greater: $minScore, genre_in: $genre) {
                        id
                        title {
                        romaji,
                        english,
                        native
                        }
                        coverImage {
                        large
                        }
                        description,
                        genres
                    }
                    }
                }
            `;

            const variables = {
                page: Math.floor(Math.random() * 500),
                minScore: filters.minScore,
                genres: filters.genres,
                format: filters.format,
            };

            const { data, status } = await axios.post<IRecommendationAnilist>(URL.ANILIST_GRAPHQL, { 
                query: graphqlQuery,
                variables: variables
            });

            if (status >= 300) {
                throw new Error('Failed to find recommendation');
            }

            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}