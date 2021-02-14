import { ReactElement } from 'react';
import Tag from '@components/Tags/tag';

type TagsProps = {
    tags?: Array<string>
}

export default function Tags({ tags = [] }: TagsProps):ReactElement {
    return (
      <div className="flex justify-center">
        {
          tags.map(tag => <Tag key={tag} tag={tag} />)
        }
      </div>
    )
  }