import React, { ReactElement } from "react";

import { BlogPost } from "@models/blogPost";

import Entry from "@components/Entries/entry";

type EntriesProps = {
    entries: Array<BlogPost>
}

export default function Entries({ entries }: EntriesProps): ReactElement {
    return (
        <React.Fragment>
            {
                entries?.map((entry:BlogPost) => <Entry key={entry.id} {...entry} />)
            }
        </React.Fragment>
    )
}