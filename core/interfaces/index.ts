import { BlogPost } from '@models/blogPost';

export type FilterParamsEntries = {
    limit?: number,
    skip?: number,
    tag?: string
}

export type EntriesResponse = {
    entries: Array<BlogPost>,
    total: number,
    limit: number,
    skip: number
}