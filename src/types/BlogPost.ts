export interface BlogPost {
    id: number,
    title: string,
    cover_image: string,
    content: string,
    in_carousel: boolean,
    tags: string[],
    slug: string,
    date_created: Date,
    date_updated: Date,
    user_created: number,
    user_updated: number,
}