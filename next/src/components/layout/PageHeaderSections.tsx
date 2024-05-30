import React from 'react'

import PageHeaderArticles from '@/src/components/sections/headers/PageHeaderArticles'
import PageHeaderBasic from '@/src/components/sections/headers/PageHeaderBasic'
import { HeaderSectionsFragment } from '@/src/services/graphql/api'

type Props = {
  header?: HeaderSectionsFragment | null | undefined
}

const PageHeaderSection = ({ header }: Props) => {
  switch (header?.__typename) {
    case 'ComponentHeaderSectionsBasic':
      return <PageHeaderBasic header={header} />

    case 'ComponentHeaderSectionsArticles':
      return <PageHeaderArticles header={header} />

    default:
      return null
  }
}

export default PageHeaderSection
