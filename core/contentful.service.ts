import { createClient } from 'contentful';
import { CONTENT_TYPE } from '@core/utilities/enum';
import { formatDate, getTags } from '@core/utilities/contentful-helpers';
import { FilterParamsEntries } from '@core/interfaces';

const SPACE: string = process.env.CONTENTFUL_SPACE || '';
const ACCESS_TOKEN: string = process.env.CONTENTFUL_TOKEN || '';

export class ContentfulService {
    private client = createClient({
        space: SPACE,
        accessToken: ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
    });

    public async getEntries(filterParams : FilterParamsEntries = {}) {
        const { limit = 5, skip = 0, tag = '' } = filterParams;
        try {
            const contents = await this.client.getEntries({
                include: 1,
                limit,
                skip,
                'fields.tags.sys.id': tag,
                content_type: CONTENT_TYPE.BLOGPOST,
                order: 'fields.publishDate'
            });
            
            const entries = contents.items?.map(({ sys, fields }:{ sys: any, fields: any }) => {
                return {
                    id: sys.id,
                    title: fields.title,
                    description: fields.description,
                    body:fields.body,
                    slug: fields.slug,
                    tags: getTags(fields.tags),
                    publishedAt: fields.publishDate ? formatDate(new Date(fields.publishDate)) : formatDate(new Date(sys.createdAt)),
                }
            });

            const total = contents.total;

            return { entries, total, limit, skip }

        } catch (error) {
            //TODO: add error handler
            console.log(error)

            return { entries: [], total: 0, limit, skip }
        }
    }
}