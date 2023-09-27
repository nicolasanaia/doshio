interface ITitle {
    romaji?: string,
    english?: string,
    native?: string
}

interface ICoverImage {
  large?: string
}

export type IRecommendationAnilistResponse = {
    id?: number,
    title?: ITitle,
    coverImage?: ICoverImage,
    description: string,
    genres: string[]
}