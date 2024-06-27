import React from 'react'

import PageHeaderBasic from '@/src/components/sections/headers/PageHeaderBasic'
import PageHeaderFeaturedNews from '@/src/components/sections/headers/PageHeaderFeaturedNews'
import PageHeaderGallery from '@/src/components/sections/headers/PageHeaderGallery'
import PageHeaderIcon from '@/src/components/sections/headers/PageHeaderIcon'
import PageHeaderImage from '@/src/components/sections/headers/PageHeaderImage'
import PageHeaderPickupDay from '@/src/components/sections/headers/PageHeaderPickupDay'
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

    case 'ComponentHeaderSectionsFeaturedNews':
      return <PageHeaderFeaturedNews header={header} />

    case 'ComponentHeaderSectionsGallery':
      return <PageHeaderGallery header={header} />

    case 'ComponentHeaderSectionsIcon':
      return <PageHeaderIcon header={header} />

    // eslint-disable-next-line no-secrets/no-secrets
    case 'ComponentHeaderSectionsPickupDay':
      return <PageHeaderPickupDay header={header} />

    default:
      return null
  }
}

export default PageHeaderSection
