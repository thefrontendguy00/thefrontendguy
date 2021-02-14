export type BlogPost = {
    id: string
    title: string,
    slug: string,
    description: string,
    body: string,
    tags: Array<string>,
    publishedAt: string
}