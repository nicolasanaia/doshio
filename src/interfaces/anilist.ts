type ITitle = {
    romaji?: string,
    english?: string,
    native?: string
}

type ICoverImage = {
  large?: string
}

export type IRecommendationAnilist = {
    id?: number,
    title?: ITitle,
    coverImage?: ICoverImage,
    description: string,
    genres: string[]
}