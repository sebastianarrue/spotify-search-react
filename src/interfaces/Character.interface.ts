export interface Character {
    mal_id: string,
    title: string,
    description?: string,
    score?: number,
    start_date?: Date,
    end_date?: Date,
    image_url: string,
    synopsis: string
}