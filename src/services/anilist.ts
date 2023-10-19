import axios from "axios";

import { URL } from "../constants/url"
import { IRecommendationAnilistResponse } from "../interfaces/anilist";

export default class AnilistService {
    async getRecommendation(): Promise<IRecommendationAnilistResponse> {
        const graphqlQuery = `
            query ($page: Int, $minScore: Int, $genre: String, $format: MediaType) {
                Page(page: $page, perPage: 1) {
                    media(type: $format, isAdult: false, averageScore_greater: $minScore, genre: $genre) {
                        id,
                        title {
                            romaji,
                            english,
                            native
                        },
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
            page: Math.floor(Math.random() * 100),
            minScore: 80,
            genre: "Action",
            format: "ANIME",
        };
        console.log(variables)
        try {
            const { data, status } = await axios.post(URL.ANILIST_GRAPHQL, { 
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