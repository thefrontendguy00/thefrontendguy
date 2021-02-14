import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';

import { ContentfulService } from '@core/contentful.service';
import { EntriesResponse } from '@core/interfaces';

import Layout from '@components/Layout/Layout';
import Entries from '@components/Entries/entries';
import { BlogPost } from '@models/blogPost';

export const getServerSideProps:GetServerSideProps = async () => {
  const contentfulService = new ContentfulService();
  const response: EntriesResponse = await contentfulService.getEntries() as EntriesResponse;

  return {
    props: {
      entries: response.entries
    }
  }
}

type IndexPageProps = {
  entries: Array<BlogPost>
}

function IndexPage(props: IndexPageProps): ReactElement {
  const { entries } = props;

  return (
      <Layout>
        <Entries entries={entries} />
      </Layout>
  )
}

export default IndexPage
