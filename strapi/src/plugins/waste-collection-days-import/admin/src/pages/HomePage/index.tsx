/*
 *
 * HomePage
 *
 */

import React from 'react'
import pluginId from '../../pluginId'
import { Box, ContentLayout, HeaderLayout, Layout, Stack } from '@strapi/design-system'
import ImportSection from './ImportSection'

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <Box background="neutral100">
        <Layout>
          <HeaderLayout title="Import Excel súborov"></HeaderLayout>
          <ContentLayout>
            <Stack spacing={4}>
              <ImportSection type={'waste-collection-days'} />
            </Stack>
          </ContentLayout>
        </Layout>
      </Box>
    </div>
  )
}

export default HomePage
