import React from 'react'

import CareersPageHeader from '@/src/components/sections/headers/CareersPageHeader'
import PageHeaderBasic from '@/src/components/sections/headers/PageHeaderBasic'
import PageHeaderBranchMap from '@/src/components/sections/headers/PageHeaderBranchMap'
import PageHeaderFeaturedNews from '@/src/components/sections/headers/PageHeaderFeaturedNews'
import PageHeaderGallery from '@/src/components/sections/headers/PageHeaderGallery'
import PageHeaderImage from '@/src/components/sections/headers/PageHeaderImage'
import PageHeaderPickupDay from '@/src/components/sections/headers/PageHeaderPickupDay'
import PageHeaderSideImage from '@/src/components/sections/headers/PageHeaderSideImage'
import { HeaderSectionsFragment } from '@/src/services/graphql/api'
import { Breadcrumb } from '@/src/utils/getPageBreadcrumbs'

type Props = {
  title: string
  perex?: string | null | undefined
  header: HeaderSectionsFragment | null | undefined
  breadcrumbs: Breadcrumb[]
}

const PageHeaderSections = ({ title, perex, header, breadcrumbs }: Props) => {
  switch (header?.__typename) {
    case 'ComponentHeaderSectionsImage':
      return <PageHeaderImage header={header} title={title} perex={perex} />

    case 'ComponentHeaderSectionsSideImage':
      return (
        <PageHeaderSideImage
          header={header}
          title={title}
          perex={perex}
          breadcrumbs={breadcrumbs}
        />
      )

    case 'ComponentHeaderSectionsFeaturedNews':
      return <PageHeaderFeaturedNews header={header} title={title} perex={perex} />

    case 'ComponentHeaderSectionsGallery':
      return <PageHeaderGallery header={header} title={title} perex={perex} />

    // eslint-disable-next-line no-secrets/no-secrets
    case 'ComponentHeaderSectionsPickupDay':
      return <PageHeaderPickupDay header={header} title={title} />

    case 'ComponentHeaderSectionsCareers':
      return <CareersPageHeader header={header} title={title} perex={perex} />

    case 'ComponentHeaderSectionsBranchMap':
      return <PageHeaderBranchMap header={header} title={title} perex={perex} />

    default:
      return <PageHeaderBasic title={title} perex={perex} />
  }
}

export default PageHeaderSections
