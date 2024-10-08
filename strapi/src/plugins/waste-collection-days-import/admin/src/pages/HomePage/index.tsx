/*
 *
 * HomePage
 *
 * Inspired by Marianum: https://github.com/bratislava/marianum.sk/blob/72dc36cfb05d544680ef891d633af9cf59f5b9e5/strapi/src/plugins/ceremonies-debtor-list/admin/src/pages/HomePage.tsx
 *
 */

import React from 'react'
import { Box, ContentLayout, HeaderLayout, Layout, Stack } from '@strapi/design-system'
import ImportSection from '../../components/ImportSection'
import DeleteSection from '../../components/DeleteSection'
import UpdateMeilisearchSection from '../../components/UpdateMeilisearchSection'

const HomePage = () => {
  return (
    <div>
      <Box background="neutral100">
        <Layout>
          <HeaderLayout title="Import odvozových dní"></HeaderLayout>
          <ContentLayout>
            <Stack spacing={4}>
              <ImportSection type={'waste-collection-days'} />
              <DeleteSection type={'waste-collection-days'} />
              <UpdateMeilisearchSection type={'waste-collection-days'} />
            </Stack>
          </ContentLayout>
        </Layout>
      </Box>
    </div>
  )
}

export default HomePage
