import { ReactElement } from 'react';

type TagProps = {
    tag: string
}

export default function Tag({ tag }: TagProps ): ReactElement {
    return (
        <div className="bg-gray-300 py-2 px-6 bg-grey-900 rounded-t-lg rounded-b-lg font-medium text-black text-sm mx-2">
            {tag}
        </div>
    )
}