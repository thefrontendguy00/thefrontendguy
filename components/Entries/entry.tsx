import React, { ReactElement, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { BlogPost } from '@models/blogPost';
import Tags from '@components/Tags/tags';

type PrismProps = {
    language?: string,
    value: ReactNode
}

function primsCodeRender({ language, value }: PrismProps): ReactElement {
    return <Prism style={ghcolors} language={language} children={value} showLineNumbers />
}

const prismRenders = {
    code: primsCodeRender
}

export default function Entry(props: BlogPost): ReactElement {
    const { publishedAt, title, tags, body} = props;
    return(
        <section className="w-full md:w-1/2 xl:w-1/2 mx-auto">
          <article className="grid-rows-4 mt-20">
            <div className="text-center">
              <time className="text-gray-500 capitalize"> 
                {publishedAt}
              </time>
            </div>
            <h1>
              {title}
            </h1>
            <div className="pb-8">
              <Tags tags={tags} />
            </div>
            <p className="font-poppins text-base text-justify">
              <ReactMarkdown renderers={prismRenders}>
                {body}
              </ReactMarkdown>
            </p>
          </article>
        </section>
      )
}