import { useTranslation } from 'next-i18next'
import React from 'react'

import { BreadcrumbsProps } from '@/src/components/common/Breadcrumbs/Breadcrumbs'
import Button from '@/src/components/common/Button/Button'
import Icon from '@/src/components/common/Icon/Icon'
import Link from '@/src/components/common/Link/Link'
import Typography from '@/src/components/common/Typography/Typography'

/**
 * Figma: https://www.figma.com/design/2qF09hDT9QNcpdztVMNAY4/OLO-Web?node-id=38-1950&m=dev
 */
const DesktopBreadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const { t } = useTranslation()

  return (
    <ol className="flex flex-wrap gap-2 py-4.5">
      <li>
        <Link variant="unstyled" href="/" aria-label={t('breadcrumbs.homepage')}>
          <Icon name="domcek" className="size-5" />
        </Link>
      </li>
      {...breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1

        return (
          <li key={breadcrumb.path} className="flex gap-2">
            <Icon name="chevron-doprava" className="size-5" aria-hidden />
            {breadcrumb.path && !isLast ? (
              <Button variant="black-link" href={breadcrumb.path} asLink hasLinkIcon={false}>
                {breadcrumb.title}
              </Button>
            ) : (
              <Typography>{breadcrumb.title}</Typography>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default DesktopBreadcrumbs
