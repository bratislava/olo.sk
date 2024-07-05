import React, { Fragment } from 'react'

import Icon from '@/src/components/common/Icon/Icon'
import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'
import SectionContainer from '@/src/components/layout/Section/SectionContainer'
import { Breadcrumb } from '@/src/utils/getPageBreadcrumbs'

type Props = {
  breadcrumbs: Breadcrumb[]
}

const BreadcrumbsPlaceholder = ({ breadcrumbs }: Props) => {
  return (
    <SectionContainer>
      <div className="flex gap-2">
        {breadcrumbs.map((breadcrumb, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={index}>
            <Icon name="chevron-doprava" />
            {breadcrumb.path ? (
              <Link href={breadcrumb.path} variant="underlined">
                {breadcrumb.title}
              </Link>
            ) : (
              <Typography>{breadcrumb.title}</Typography>
            )}
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  )
}

export default BreadcrumbsPlaceholder
