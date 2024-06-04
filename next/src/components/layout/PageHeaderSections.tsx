import React from 'react'

import PageHeaderArticles from '@/src/components/sections/headers/PageHeaderArticles'
import PageHeaderBasic from '@/src/components/sections/headers/PageHeaderBasic'
import PageHeaderGallery from '@/src/components/sections/headers/PageHeaderGallery'
import PageHeaderImage from '@/src/components/sections/headers/PageHeaderImage'
import PageHeaderSideImage from '@/src/components/sections/headers/PageHeaderSideImage'
import { HeaderSectionsFragment } from '@/src/services/graphql/api'

type Props = {
  header: HeaderSectionsFragment | null | undefined
}

const PageHeaderSection = ({ header }: Props) => {
  switch (header?.__typename) {
    case 'ComponentHeaderSectionsImage':
      return <PageHeaderImage header={header} />

    case 'ComponentHeaderSectionsSideImage':
      return <PageHeaderSideImage header={header} />

    case 'ComponentHeaderSectionsBasic':
      return <PageHeaderBasic header={header} />

    case 'ComponentHeaderSectionsArticles':
      return <PageHeaderArticles header={header} />

    case 'ComponentHeaderSectionsGallery':
      return <PageHeaderGallery header={header} />

    default:
      return null
  }
}

export default PageHeaderSection
